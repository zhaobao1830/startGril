/**
 * Created by Administrator on 2016/9/26.
 */
//����һ������
var starObj=function(){
    this.x;
    this.y;
    this.picNo;
    this.time;
}
//��ʼ�����������ֵ
starObj.prototype.init=function(){
    this.x=Math.random()*600+100; //Math.random()�������ֵ[0,1)
    this.y=Math.random()*300+150;
    this.picNo=Math.floor(Math.random()*7);
    this.time=0;
}
starObj.prototype.update=function(){
    this.time+=deltaTime;
    if(this.time>50){
        this.picNo+=1;
        this.picNo%=7; //���������
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
////��������
//function drawStar(){
//    ctx.drawImage(starPic,300,400)
//}

//���ƺܶ�����
function drawStars(){
    for(var i=0;i<num;i++){
        stars[i].draw();
        stars[i].update()
    }
}