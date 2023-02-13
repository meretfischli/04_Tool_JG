//1. add bubbles behind text
//2. variable Font

let spans = []
let newX, newY, newW, newH
let fr = 60


function setup(){
	createCanvas(windowWidth, windowHeight)
	background(0, 0, 255)

	frameRate(fr)
	

	for(let i = 0; i < 1; i++){
		let newSpan = new Span()
		spans.push(newSpan)
		spans[i].addLines()
	}
}

function draw(){
	// background(255, 255, 100)
	for(let i = 0; i < 4; i++){
		// spans[i].addBubbles()
		// spans[i].addRectangle()
		
		
		
	}
	
}