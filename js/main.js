/**
 * Created by Administrator on 2016/9/25.
 */
var can; //canvas
var ctx; //canvas��2D����
var w;  //�����Ŀ�
var h;  //�����ĸ�
//ҳ����ǵ��õķ���
function init(){
    can=document.getElementById("canvas")
    ctx=can.getContext("2d");
    w=can.width;
    h=can.height;

    gameloop()
}

document.body.onload=init;
//ˢ��canvas����
function gameloop(){
    window.requestAnimFrame(gameloop);
    drawBackground();
}
//�����������ɫ
function drawBackground(){
    ctx.fillStyle="#393550"; //���û򷵻��������滭����ɫ�������ģʽ
    ctx.fillRect(0,0,w,h) //���ƾ��Σ�0,0������ʼ���꣬w,h������εĿ��
}