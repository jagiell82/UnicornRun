class Unicorn {
    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - 50;
        this.vy = 0;
        this.gravity = 2;
    }

    jump() {
        if (this.y == height - this.r) {
            this.vy = -35;
        }
    }

    hits(train) {
        return collideRectRect(this.x, this.y, this.r, this.r, train.x, train.y, train.r, train.r);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(uImg, this.x, this.y, this.r, this.r);
    }
}