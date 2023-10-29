class Button {
    constructor(text, x, y, width, height, boxColor, textColor) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boxColor = boxColor;
        this.textColor = textColor;
    }

    clicked = false;
    onClick = function () { };

    display() {
        fill(this.boxColor)
        rect(this.x, this.y, this.width, this.height);
        fill(this.textColor)
        text(this.text, this.x + this.width / 2, this.y + this.height / 2)
        if (mouseIsPressed && !this.clicked) {
            if (this.containsMousePosition()) {
                this.clicked = true;
                this.onClick();
            }
        }
        else if (!mouseIsPressed) {
            this.clicked = false
        }
    }


    containsMousePosition() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            return true;
        }
        return false;
    }

}