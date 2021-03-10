
//////////////////////////Random function
//Random number===================================
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}
//Random number===================================

//Random Colors==========================================
function setBg(elColor){
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	elColor.style.backgroundColor = "#" + randomColor;
}
//Random Colors==========================================

//////////////////////////Random function




///////////////////// Add Styles to div======================================
function addStyles(newElem){
// Random Width and Height ==============
	let elWidth = randomInt(window.innerWidth/10, window.innerWidth/4)+'px';
	let elHeight = randomInt(window.innerHeight/6, window.innerHeight/3)+'px';
// Random Width and Height ==================

// Random Opacity ====================
	let elOpacity = Math.random();
	if(elOpacity < 0.3){
		elOpacity = elOpacity+0.6;
	}else if (elOpacity < 0.5) {
		elOpacity = elOpacity+0.3;
	}
// Random Opacity ====================


// Random Position ====================
	let elLeft_01 = randomInt(0, window.innerWidth);
	let elTop_01 = randomInt(0, window.innerHeight);

	if(elLeft_01 > window.innerWidth - 200){
		elLeft_01 = elLeft_01 - 200;
	}
	if(elTop_01 > window.innerHeight - 200){
		elTop_01 = elTop_01 - 200;

	}
	let elLeft = elLeft_01 + 'px';
	let elTop = elTop_01 + 'px';
// Random Position ====================


//adding Styles ========================
	newElem.style.width = `${elWidth}`;
	newElem.style.height = `${elHeight}`;


	newElem.style.left = `${elLeft}`;
	newElem.style.top = `${elTop}`;

	newElem.style.opacity = `${elOpacity}`;

	setBg(newElem);
}
// Add Styles to div======================================


// Random Position Function====================
function addNewPosition(newElem){
	let elLeft_01 = randomInt(0, window.innerWidth);
	let elTop_01 = randomInt(0, window.innerHeight);

	if(elLeft_01 > window.innerWidth - 200){
		elLeft_01 = elLeft_01 - 200;
	}
	if(elTop_01 > window.innerHeight - 200){
		elTop_01 = elTop_01 - 200;

	}
	let elLeft = elLeft_01 + 'px';
	let elTop = elTop_01 + 'px';

	//add position
	newElem.style.left = `${elLeft}`;
	newElem.style.top = `${elTop}`;
// Random Position Function====================

}
//////////////////// Add Styles to div======================================



const startButton = document.querySelector('.link');

const container = document.querySelector('.content');


let animationAllov = true;

let addDivsAnim = true;

let removeDivsAnim = false;

//Start animation ==================================================


startButton.onclick = function(){
	if(animationAllov && addDivsAnim){
		start(5,"backgDiv", container);
		addDivsAnim = false;
		removeDivsAnim = true;
	}else if (animationAllov && removeDivsAnim) {
		removeDivs()
		addDivsAnim = true;
		removeDivsAnim = false;
	}
};

 //Start animation ==================================================

function removeDivs(){
	let divs = document.querySelectorAll('.backgDiv');
	let i = divs.length-1;


		let timerId = setInterval(function() {
		//	divs[i].remove();
			disapering(divs[i])

			i--;
			if (i <= -1) {
				clearInterval(timerId);
			}
		}, 1000);
		/*
		for(let i=0;i<divs.length;i++){
			divs[i].remove();
		}
		*/
}

//element.style.opacity = "0.9";
function disapering(elem){
	let i = 1;

	let timerId = setInterval(function() {
	//	elem.style.opacity = `${i}`;
		elem.style.transform=`scale(${i}, ${i})`;
		console.log(i);
		i = i - 0.1;
		if (i <= 0.1) {
				clearInterval(timerId);
				elem.remove();
			}
	}, 150);
}


/////////////////////////////////////PROCESS FUNCTIONS
//Main function ==============================================
function start(num, clasName, contain){
	let i = 1;
	animationAllov = false;
	console.log('animationAllov',animationAllov);
	let timerId = setInterval(function() {
			if (i >= num) {
				clearInterval(timerId);
				animationAllov = true;
				console.log('animationAllov++',animationAllov);
			}
			console.log('animationAllov--',animationAllov);
			let newDiw = document.createElement("div");
			newDiw.className = clasName;
			contain.append(newDiw);
			divWithFotos = document.querySelectorAll('.backgDiv');
			
			divTocenter('.backgDiv','_center',contain)

			addImage(`..//img/family/img_${i}.jpg`, newDiw)
			setTimeout(addActive,800, newDiw,'_active');
		i++;
	}, 1000);
}
//Main function ==============================================


// Adding active class=========================
function addActive(first,active){
	first.classList.add(active);
	addStyles(first);
}
// Adding active class=========================

// Adding images to divs===============================
function addImage(imegSrc, parent){
	var elem = document.createElement("img");
	elem.setAttribute("src", imegSrc);
	parent.appendChild(elem);
}
// Adding images to divs===============================


///FullScreen image===============================
function divTocenter(mainClass, addingClass,containBox){
	let divWithFotos = document.querySelectorAll(mainClass);

	for(let i=0;i<divWithFotos.length;i++){
		divWithFotos[i].onclick = function(event) {
			divWithFotos[i].classList.toggle(addingClass);
			addNewPosition(divWithFotos[i]);
		}
	}
}
///FullScreen image===============================

/////////////////////////////////////PROCESS FUNCTIONS

// startButton.onclick = function(){start(10,".backgDiv", container)};

// setInterval(moveBlocks,200);

 let speed = 2;

function moveBlocks(){
	let movingBlocks = document.querySelectorAll('._active');

	for (let i=0; i<movingBlocks.length; i++) {
		let topMove = randomInt(-2, 2);
		let leftMove = randomInt(-2, 2);

		let elTop = 2 + parseInt(movingBlocks[i].getBoundingClientRect().top);
		let elLeft = 2 + parseInt(movingBlocks[i].getBoundingClientRect().left);

		console.log(`${elTop} + 'px'`);
		movingBlocks[i].style.top = `${elTop}px`;
	//	console.log("elLeft", movingBlocks[i].style.top);
		movingBlocks[i].style.left = `${elLeft}px`;

	}
	
}
