/**
 * Created by Administrator on 2016/9/26.
 */
//定义一个方法
var starObj=function(){
    this.x;
    this.y;
    this.picNo;
    this.time;
}
//初始化，获得坐标值
starObj.prototype.init=function(){
    this.x=Math.random()*600+100; //Math.random()返回随机值[0,1)
    this.y=Math.random()*300+150;
    this.picNo=Math.floor(Math.random()*7);
    this.time=0;
}
starObj.prototype.update=function(){
    this.time+=deltaTime;
    if(this.time>50){
        this.picNo+=1;
        this.picNo%=7; //这个看不懂
        this.time=0;
    }

    //if(this.picNo>=7){
    //    this.picNo=0;
    //}
}
starObj.prototype.draw=function(){
    //drawImage(img,sx,sy,swidth.sheight,x,y,width,height)
    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7)
}
////绘制星星
//function drawStar(){
//    ctx.drawImage(starPic,300,400)
//}

//绘制很多星星
function drawStars(){
    for(var i=0;i<num;i++){
        stars[i].draw();
        stars[i].update()
    }
}