class GROUNDY{
    constructor(x,y,w,h)
{
    let options= {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = this.w
    this.h = this.h
    World.add(world,this.body)
}
show(){
 var pos = this.body.position
 push()
 rectMode(CENTER)
 stroke("yellow")
 fill("yellow")
 rect(pos.x, pos.y, this.w, this.h)
 pop()
}
}