

class Span {
    constructor() {
        let mySpan = document.createElement("span")
       
        mySpan.contentEditable = true
        mySpan.classList.add("words")
        document.querySelector('.move').appendChild(mySpan)
    
        this.updateSpan(mySpan)
      
        this.html = mySpan
        this.text = "bla"

        mySpan.innerHTML = this.text

        mySpan.addEventListener("input", (e) => {
            this.updateSpan(mySpan)
        })

        const top = random(0, windowHeight-this.h)
        const left = random(0, windowWidth-this.w)
    
        mySpan.setAttribute("style", `left: ${left}px; top: ${top}px`)
      
        this.x = left
        this.y = top



        // console.log("width: ", this.html.offsetWidth, "height: ", this.html.offsetHeight)
        // mySpan.addEventListener('input', (e) => {
        //     console.log(e.target)
        //     console.log(e.target.parentElement)
        //     e.target.parentElement
        //    // idealerweise würde jetzt auch das Objekt "spanInfo", siehe unten, aktualisiert
        // })

          
    }

    updateSpan(mySpan) {
        this.w = mySpan.offsetWidth
        this.h = mySpan.offsetHeight
    }

    addBubbles() {
        this.numBubbles = 3
        this.bubbles = []
        for (let i = 0; i < this.numBubbles; i += 1) {

            this.bubbles.push(new Bubble(this.getPosX(), this.getPosY(), this.getWidth(), this.getHeight()))
        }

        push()
        // translate(this.h, this.w)
        for (let bubble of this.bubbles) {
            bubble.show()
        }
        pop()
    }

    addRectangle() {
        this.numRects = 1
        this.rects = []
        for (let i = 0; i < this.numRects; i += 1) {

            this.rects.push(new NewRect(this.getPosX(), this.getPosY(), this.getWidth(), this.getHeight()))
        }

        push()
        for (let rect of this.rects) {
            rect.show()
        }
        pop()
    }
    

    getWidth() {
        return this.w
    }
    
    getHeight() {
        return this.h
    }
    
    getPosX() {
        return this.x
    }

    getPosY() {
        return this.y
    }

}

class NewRect {
    constructor(left, top, width, height){
        this.x = left
		this.y = top
		this.w = width
		this.h = height
    }

    show(){
        // fill('red')
        noFill()
        stroke(255, 0, 0)
        rect(this.x, this.y, this.w, this.h)
    }
}

class Bubble {
    constructor(left, top, width, height) {
        this.x = left
		this.y = top
		this.w = width
		this.h = height
    }

    show() {
        // fill(random(0, 255), random(0, 255), random(0, 255))
        push()
        translate(this.w/2, this.h/2)
        stroke(0, 255, 255)
        // circle(this.x, this.y, this.w, this.h)

        noFill()
        strokeWeight(100)
        beginShape();
    
        // Specifying all the vertices
        vertex(this.x - this.w, this.y);
        vertex(this.x, this.y - 100);
        vertex(this.x + 50, this.y + 100);
        vertex(this.x + this.w, this.y); 

        // vertex(this.x+random(145), this.y+random(245));
        // vertex(this.x+random(50), this.y+random(105));
        // vertex(this.x+random(25), this.y+random(235));
        // vertex(this.x+random(115), this.y+random(120));
        // vertex(this.x+random(250), this.y+random(125));
        // vertex(this.x+random(200), this.y+random(150));

        endShape();

        pop()
    }

}