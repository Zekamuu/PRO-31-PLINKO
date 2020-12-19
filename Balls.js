class Balls {
    constructor(x, y, r){
        var options = {
            restitution:0.4
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(x, y, r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(matterWorld, this.body);
    }
    show(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, this.radius);
    }
}