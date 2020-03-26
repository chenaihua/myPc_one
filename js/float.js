//1.漂浮窗开始的x坐标还有y坐标
var xPos = 20;//from jzxue.com
var yPos = document.documentElement.clientHeight;
//2.漂浮窗移动的步长
var step = 1;
//3.漂浮窗漂浮间隔时间
var delay = 30;
//4.高度                    
var height = 0;
//5.高开始量                    
var Hoffset = 0; 
//6.宽开始量                   
var Woffset = 0;                     
var yon = 0;                    
var xon = 0;                     
var pause = true;                    
var interval;
//这里的img就是html页面中id为img的漂漂浮窗div.                    
img.style.top = yPos;
//改变位置的函数                    
function changePos() {
    //body宽 (屏幕宽)                   
    width = document.documentElement.clientWidth; 
    //body高 (屏幕高)                   
    height = document.documentElement.clientHeight;
    //自身的高等于图片高                    
    Hoffset = img.offsetHeight;
    //自身的宽等于图片宽                    
    Woffset = img.offsetWidth;
    //img左距=x轴长度+获取页面的水平滚动条的位置,设置图片距离左边距离                   
    img.style.left = xPos + document.documentElement.scrollLeft+"px";
    //img距离顶部=y轴长度+获取页面的垂直滚动条位置,设置图片距距离顶部距离.                    
    img.style.top = yPos + document.documentElement.scrollTop+"px";
    //yon初始值为0                    
    if (yon) { 
        //yPos=y轴长度+1 向上偏移                 
        yPos = yPos + step;                    
    }else {
        //yPos=y轴长度-步数,向下偏移             
        yPos = yPos - step;                    
    } 
    //当y轴偏移后长度小于0,则赋值0,yon=1(后面yPos可以继续下偏移)           
    if (yPos < 0) {                  
        yon = 1;                    
        yPos = 0;                    
    } 
    //yPos向上偏移或者不懂>=屏幕高度-img的高                
    if (yPos >= (height - Hoffset)) { 
        //yPos已向上偏移则yon=0,yPos则变小=屏幕高度-img的高                   
        yon = 0;                    
        yPos = (height - Hoffset);                     
    } 
    //xon=0,则为false,1为true
    //xon的初始值为0                 
    if (xon) { 
        //xPos=x轴长度+1,向右偏移                   
        xPos = xPos + step;                    
    }else {
        //否则xPos=x轴长度-步数,向左偏移                 
        xPos = xPos - step;                   
    }
    //当x轴偏移后长度小于0,则赋值0,xon=1(后面xPos可以继续左偏移)                  
    if (xPos < 0) {                    
        xon = 1;                   
        xPos = 0;                   
    }  
    //xPos>=屏幕宽度-img的宽       
    if (xPos >= (width - Woffset)) {                    
        xon = 0;           
        xPos = (width - Woffset);                    
    }                    
}
function start(){ 
    //图片可视                   
    img.style.visibility = "visible"; 
    //每隔delay(30s前面设置的)调用changePos方法,隔30秒移动图片 
    //注意: setInterval它设置的时间间隔小于动画帧速(如每秒10帧,相当于100毫秒,则尽可能用接近interval的时间间隔调用函数)               
    interval = setInterval('changePos()', delay);                    
} 
//调用图片移动的方法.             
start();  