/**
 * Created by Administrator on 2016/9/25.
 */
/*
* 1����������
* 2������grilͼƬ
* 3����������ͼƬ
* 4�����ƶ������
* 5��ʵ��������˸����
* 6��ʵ�������������
* 7������������¼�
* */
/*
* ��Ŀ�õ���֪ʶ��
* 1��canvas getContext()��������������2DͼƬ
* 2��requestAnimFrame���� ѭ���¼���ע����setTimeout()��setInterval()�ķ���
* 3��fillStyle���� ���û򷵻��������滭����ɫ�������ģʽ
* 4��fillRect���� ���ƾ���
* 5��drawImage��������ͼƬ context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
* sx��ȡ��x���  sy��ȡ��y��� swidth,sheight ��ȡ�Ŀ��  x ͼƬ����canvas�ϵ�x��㣬y ͼƬ����canvas�ϵ�y���
* width,height ͼƬ����canvas�ϵĿ��
* */
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

//�ж�����Ƿ���ͼƬ��
var switchy = false;

//life���ǵ�����
var life=0;

//ҳ����ǵ��õķ���
function init(){
    can=document.getElementById("canvas")
    ctx=can.getContext("2d");
    w=can.width;
    h=can.height;

    //����������¼�
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
//ˢ��canvas����
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