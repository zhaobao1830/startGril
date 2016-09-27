/**
 * Created by Administrator on 2016/9/25.
 */
/*
* 1、创建画布
* 2、绘制gril图片
* 3、绘制星星图片
* 4、绘制多个星星
* 5、实现星星闪烁功能
* 6、实现星星随机出现
* 7、添加鼠标控制事件
* */
/*
* 项目用到的知识点
* 1、canvas getContext()方法，用来设置2D图片
* 2、requestAnimFrame（） 循环事件，注意与setTimeout()、setInterval()的方法
* 3、fillStyle（） 设置或返回用于填充绘画的颜色、渐变或模式
* 4、fillRect（） 绘制矩形
* 5、drawImage（）绘制图片 context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
* sx截取的x起点  sy截取的y起点 swidth,sheight 截取的宽高  x 图片放在canvas上的x起点，y 图片放在canvas上的y起点
* width,height 图片放在canvas上的宽高
* */
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

//判断鼠标是否在图片上
var switchy = false;

//life星星的亮度
var life=0;

//页面打开是调用的方法
function init(){
    can=document.getElementById("canvas")
    ctx=can.getContext("2d");
    w=can.width;
    h=can.height;

    //绑定鼠标移入事件
    document.addEventListener('mousemove', mousemove, false);

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
    aliveUpdate();
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

function mousemove(e){
    if(e.offsetX|| e.layerX){
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;

        if (px > padLeft && px < (padLeft + girlWidth) && py > padTop && py < (padTop + girlHeight)) {
            switchy = true;
        } else {
            switchy = false;
        }
    }
}