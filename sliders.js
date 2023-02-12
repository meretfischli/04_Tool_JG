// colorSlider()

	// const r = rSlider.value();
  	// const g = gSlider.value();
 	// const b = bSlider.value();
 	// background(r, g, b);

     vSlider = createSlider(0, 255, 100)
     vSlider.position(20, 50)

     variable.style('font-weight', vSlider.value())

    // function fontBreite(){
// 	const newFont = `${300 + myRange.value * 20}%`
// 	document.querySelector('.words').fontWeight = newFont
// 	console.log(myRange.value)
// }

// const myRange = document.querySelector("#my-range")
// myRange.addEventListener('change', fontBreite)

function colorSlider(){
	rSlider = createSlider(0, 255, 100);
	rSlider.position(20, 20);
	gSlider = createSlider(0, 255, 0);
	gSlider.position(20, 50);
	bSlider = createSlider(0, 255, 255);
	bSlider.position(20, 80);
}