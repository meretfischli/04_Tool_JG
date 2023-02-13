//1. add bubbles behind text
//2. variable Font

let spans = []
let newX, newY, newW, newH
let fr = 60


function setup(){
	createCanvas(windowWidth, windowHeight)

	frameRate(fr)
	

	for(let i = 0; i < 4; i++){
		let newSpan = new Span()
		spans.push(newSpan)
		
	}
}

function draw(){
	background(255, 255, 100)
	for(let i = 0; i < 4; i++){
		spans[i].addBubbles()
		spans[i].addRectangle()
		
		
	}
	
}