/**
 * Created by Administrator on 2016/9/25.
 */
var can; //canvas
var ctx; //canvas的2D场景
var w;  //画布的宽
var h;  //画布的高

//距离左边距
var padLeft = 100;
//距离右边距
var padTop = 150;

var girlWidth = 600;
var girlHeight = 300;

//女孩图片
var girlPic = new Image();
//星星图片
var starPic = new Image();

//星星数量
var num=60;
//星星
var stars=[];

//上次刷新的时间
var lastTime;
//俩帧刷新的间隔时间
var deltaTime;


//页面打开是调用的方法
function init(){
    can=document.getElementById("canvas")
    ctx=can.getContext("2d");
    w=can.width;
    h=can.height;

    girlPic.src="../img/girl.jpg";
    starPic.src="../img/star.png";

    for(var i=0;i<num;i++){
        var obj=new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime=Date.now();
    gameloop()
}

document.body.onload=init;
//刷新canvas画布
function gameloop(){
    window.requestAnimFrame(gameloop);
    var  now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;

    drawBackground();
    drawGril();
    drawStars();
}
//给画布填充颜色
function drawBackground(){
    ctx.fillStyle="#393550"; //设置或返回用于填充绘画的颜色、渐变或模式
    ctx.fillRect(0,0,w,h) //绘制矩形，0,0代表起始坐标，w,h代表矩形的宽高
}
//绘制gril图片
function drawGril(){
    //drawImag(img,x,y)
    ctx.drawImage(girlPic,padLeft,padTop,girlWidth,girlHeight)
}