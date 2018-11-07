var colors =["red", "blue","magenta","black","orange"];
function Ball(game){
    this.game = game;
    this.ctx =  game.ctx;

    this.x = Math.floor(Math.random()*game.canvas.width);
    this.y = Math.floor(Math.random()*game.canvas.height);
    this.r= Math.random()*5+5;
    this.angle = Math.random()*2*Math.PI;
    this.speed = (Math.random()*game.maxBallSpeed)+1;
    this.color = colors[Math.floor(this.speed-1)];
    this.vx = Math.cos(this.angle)* this.speed;
    this.vy = Math.sin(this.angle)* this.speed;


    console.log(this.speed);

}

Ball.prototype.tick = function(){
    this.x += this.vx;
    this.y += this.vy;

    if (this.x <= 0 + this.r){
        this.x = - this.x + 2* this.r;
        this.vx = Math.abs(this.vx);
    }
    if (this.x >= this.game.canvas.width - this.r){
        var dif = this.x - (this.game.canvas.width - this.r);
        this.x -= 2*dif;
        this.vx = -Math.abs(this.vx);
    }
    if (this.y <= 0 + this.r){
        this.y = - this.y + 2* this.r;
        this.vy = Math.abs(this.vy);
    }
    if (this.y >= this.game.canvas.height - this.r){
        var dif = this.y - (this.game.canvas.height - this.r);
        this.y -= 2*dif;
        this.vy = -Math.abs(this.vy);
    }


}
Ball.prototype.draw = function(){
    var ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fillStyle= this.color;
console.log(this.color);
    ctx.fill();
}