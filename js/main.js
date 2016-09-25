/**
 * Created by Administrator on 2016/9/25.
 */
var can; //canvas
var ctx; //canvas的2D场景
var w;  //画布的宽
var h;  //画布的高
//页面打开是调用的方法
function init(){
    can=document.getElementById("canvas")
    ctx=can.getContext("2d");
    w=can.width;
    h=can.height;

    gameloop()
}

document.body.onload=init;
//刷新canvas画布
function gameloop(){
    window.requestAnimFrame(gameloop);
    drawBackground();
}
//给画布填充颜色
function drawBackground(){
    ctx.fillStyle="#393550"; //设置或返回用于填充绘画的颜色、渐变或模式
    ctx.fillRect(0,0,w,h) //绘制矩形，0,0代表起始坐标，w,h代表矩形的宽高
}