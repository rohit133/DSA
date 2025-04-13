function Circle(radius) { 
    this.radius = radius;
    this.location = { x: 0, y: 0 };
    this.draw = function() {};
    this.move = function(nextX, nextY) {
        this.location.x = nextX;
        this.location.y = nextY;
    };
}