/**
 * Created by Administrator on 2016/9/26.
 */
 //绘制星星JS
//定义一个方法
var starObj=function(){
    this.x;
    this.y;
    this.picNo;
    this.time;

    this.xSbd; //X轴速度
    this.ySbd; //Y轴速度
}
//初始化，获得坐标值
starObj.prototype.init=function(){
    this.x=Math.random()*600+100; //Math.random()返回随机值[0,1)
    this.y=Math.random()*300+150;
    this.picNo=Math.floor(Math.random()*7);
    this.time=0;

    this.xSbd=Math.random()*3-1.5;
    this.ySpd=Math.random()*3-1.5;
}
starObj.prototype.update=function(){
    this.x+=this.xSbd*deltaTime*0.004;
    this.y+=this.ySpd*deltaTime*0.004;

    //星星重生
    if (this.x > (padLeft + girlWidth) || this.x < (padLeft - 10)){
        this.init();
        return
    }
    if (this.y > (padTop + girlHeight) || this.y < (padTop - 10)){
        this.init();
        return
    }



    this.time+=deltaTime;
    if(this.time>50){
        this.picNo+=1;
        //if(this.picNo>=7){
        //        this.picNo=0;
        // }
        this.picNo%=7; //余数为7，意思是picNo必须小于7
        this.time=0;
    }
}

starObj.prototype.draw=function(){
    //在save和restore中间的操作受影响
    ctx.save();

    //globalAlpha 全局透明度
     ctx.globalAlpha=life; //[0,1]

    //drawImage(img,sx,sy,swidth.sheight,x,y,width,height)
    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7)

    ctx.restore()
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

function aliveUpdate() {
    if (switchy) {
        life += 0.03;
        if (life > 0.7) {
            life = 0.7;
        }
    } else {
        life -= 0.03;
        if (life < 0) {
            life = 0;
        }
    }
}