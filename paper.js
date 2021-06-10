class paper{
    constructor(x,y,r){
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
         this.image = loadImage("sprites/paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        imageMode(RADIUS);
        fill("orange");
        image(this.image, pos.x, pos.y, this.r, this.r);
      }
}