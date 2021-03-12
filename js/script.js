
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

//Center position =========================
function removeToCenter(elem){
	let left = window.innerWidth/2;
	let top = window.innerHeight/2;

	let width = elem.offsetWidth / 2;
	let height = elem.offsetHeight /2;

	console.log(left)
	elem.style.left = `${(left-width)+'px'}`;
	elem.style.top = `${(top-height)+'px'}`;
}
//////////////////// Add Styles to div======================================


//Start Button====================
const startButton = document.querySelector('.link');

//Container for Divs=================
const container = document.querySelector('.content');

// Variacles=//////////////////////////
//Animation Alloving=============
let animationAllov = true;

//Adding blocks==================
let addDivsAnim = true;

//Remove blocks===================
let removeDivsAnim = false;

// Variacles=//////////////////////////

//Start animation ==================================================

/*
startButton.onclick = function(){
	if(animationAllov && addDivsAnim){
		start(10,"backgDiv", container);
		addDivsAnim = false;
		removeDivsAnim = true;
	}else if (animationAllov && removeDivsAnim) {
		removeDivs()
		addDivsAnim = true;
		removeDivsAnim = false;
	}
};
*/

startButton.onclick = function(){
	if(animationAllov && addDivsAnim){
		start_02(10,"backgDiv", container);
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
	let divs = document.querySelectorAll('.box');
	let i = divs.length-1;


		let timerId = setInterval(function() {
		//	divs[i].remove();
			disapering(divs[i])

			i--;
			if (i <= -1) {
				clearInterval(timerId);
			}
		}, 800);
}

function disapering(elem){
	let i = 1;

	let timerId = setInterval(function() {
	//	elem.style.opacity = `${i}`;
		elem.classList.remove('_active');
		elem.style.transform=`scale(${i}, ${i})`;
		i = i - 0.1;
		if (i <= 0.1) {
				clearInterval(timerId);
		//		elem.classList.remove('_active');
				elem.classList.remove('backgDiv');
			/*	let left = window.innerWidth/2 + 'px';
				let top = window.innerHeight/2 + 'px';
				console.log(left)
				elem.style.left = `${left}`;
				elem.style.top = `${top}`; */
				
			//	elem.remove();
			}
	}, 150);
}


var imgArray = new Array();

window.onload = function(e){ 
	for(let i=1;i<11;i++){
		imgArray[i] = new Image();
		imgArray[i].src =`../img/family/img_1.jpg` ;

	}
}



/////////////////////////////////////PROCESS FUNCTIONS
//Main function ==============================================
function start(num, clasName, contain){
	let i = 1;
	animationAllov = false;
	let timerId = setInterval(function() {
			if (i >= num) {
				clearInterval(timerId);
				animationAllov = true;
			}
			let newDiw = document.createElement("div");
			newDiw.className = clasName;
			contain.append(newDiw);
			divWithFotos = document.querySelectorAll('.backgDiv');
			
			divTocenter('.backgDiv','_center',contain)

			addImage(imgArray[i], newDiw)
		//	addImage(`..//img/family/img_${i}.jpg`, newDiw)
			setTimeout(addActive,800, newDiw,'_active');
		i++;
	}, 1000);
}


function start_02(num, clasName, contain){

	animationAllov = false;
	let arrDivs = document.querySelectorAll('.box');
	let i = arrDivs.length-1;
	let timerId = setInterval(function() {
			if (i === 0) {
				clearInterval(timerId);
				animationAllov = true;
			}
			removeToCenter(arrDivs[i]);
			arrDivs[i].classList.add(clasName);
			divWithFotos = document.querySelectorAll('.backgDiv');
			
			divTocenter('.backgDiv','_center',contain)

		//	addImage(imgArray[i], newDiw)
		//	addImage(`..//img/family/img_${i}.jpg`, newDiw)
			setTimeout(addActive,800, arrDivs[i],'_active');
		i--;
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
//	var elem = document.createElement("img");
//	var elem = imegSrc;
//	elem.setAttribute("src", imegSrc);
	parent.appendChild(imegSrc);
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
