let r = Math.random


function setup(){
	createCanvas(windowWidth, windowHeight)
	createMultiple()

	// create sliders
  	rSlider = createSlider(0, 255, 100);
  	rSlider.position(20, 20);
  	gSlider = createSlider(0, 255, 0);
  	gSlider.position(20, 50);
  	bSlider = createSlider(0, 255, 255);
  	bSlider.position(20, 80);
}

function draw(){
	const r = rSlider.value();
  	const g = gSlider.value();
 	const b = bSlider.value();
 	// background(r, g, b);

	
}

function createMultiple(){
	for(let i = 0; i < 5; i++){
		addSpan()
	}

}

function addSpan(){
	let mySpan = document.createElement("span")
	mySpan.innerHTML = "bla"
	mySpan.contentEditable = true
	mySpan.classList.add("words")
	document.querySelector('.move').appendChild(mySpan)

	const words = document.querySelectorAll('.words')
	const top = random() * 300
	const left = random() * 300

	ellipse(top, left, 100, 100)
	console.log(top, left)

	mySpan.setAttribute("style", `left: ${left}px; top: ${top}px`)
	console.log(top, left)
}