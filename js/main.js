/**
 * Created by Administrator on 2016/9/25.
 */
var can; //canvas
var ctx; //canvas��2D����
var w;  //�����Ŀ�
var h;  //�����ĸ�

//������߾�
var padLeft = 100;
//�����ұ߾�
var padTop = 150;

var girlWidth = 600;
var girlHeight = 300;

//Ů��ͼƬ
var girlPic = new Image();
//����ͼƬ
var starPic = new Image();

//��������
var num=60;
//����
var stars=[];

//�ϴ�ˢ�µ�ʱ��
var lastTime;
//��֡ˢ�µļ��ʱ��
var deltaTime;


//ҳ����ǵ��õķ���
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
//ˢ��canvas����
function gameloop(){
    window.requestAnimFrame(gameloop);
    var  now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;

    drawBackground();
    drawGril();
    drawStars();
}
//�����������ɫ
function drawBackground(){
    ctx.fillStyle="#393550"; //���û򷵻��������滭����ɫ�������ģʽ
    ctx.fillRect(0,0,w,h) //���ƾ��Σ�0,0������ʼ���꣬w,h������εĿ��
}
//����grilͼƬ
function drawGril(){
    //drawImag(img,x,y)
    ctx.drawImage(girlPic,padLeft,padTop,girlWidth,girlHeight)
}