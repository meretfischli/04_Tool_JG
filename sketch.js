let r = Math.random


function setup(){
	createCanvas(windowWidth, windowHeight)
	noLoop()
}

function draw(){
	createMultiple()
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

	for(const word of words) {
		const top = random() * 300
		const left = random() * 300
		// const yT = r() * 300
		// const xT = r() * 300
		console.log(top, left)

		// words.setAttribute("style", `--xTranslate: ${xT}px; --yTranslate: ${yT}px; left: ${left}px; top: ${top}px`)
		word.setAttribute("style", `left: ${left}px; top: ${top}px`)
	}
}