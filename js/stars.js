/**
 * Created by Administrator on 2016/9/26.
 */
 //��������JS
//����һ������
var starObj=function(){
    this.x;
    this.y;
    this.picNo;
    this.time;

    this.xSbd; //X���ٶ�
    this.ySbd; //Y���ٶ�
}
//��ʼ�����������ֵ
starObj.prototype.init=function(){
    this.x=Math.random()*600+100; //Math.random()�������ֵ[0,1)
    this.y=Math.random()*300+150;
    this.picNo=Math.floor(Math.random()*7);
    this.time=0;

    this.xSbd=Math.random()*3-1.5;
    this.ySpd=Math.random()*3-1.5;
}
starObj.prototype.update=function(){
    this.x+=this.xSbd*deltaTime*0.004;
    this.y+=this.ySpd*deltaTime*0.004;

    //��������
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
        this.picNo%=7; //����Ϊ7����˼��picNo����С��7
        this.time=0;
    }
}

starObj.prototype.draw=function(){
    //��save��restore�м�Ĳ�����Ӱ��
    ctx.save();

    //globalAlpha ȫ��͸����
     ctx.globalAlpha=life; //[0,1]

    //drawImage(img,sx,sy,swidth.sheight,x,y,width,height)
    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7)

    ctx.restore()
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