
var minsize=5,maxsize=30,time1=200,snowColor="#fff";
var snow=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("❄");
$(function(){
	  var documentWidth=$(document).width();
	  var documentHeight=$(document).height();
	  setInterval(function(){
	  	var startPositionLeft=Math.random()*documentHeight;
	  	var startOpacity=0.7+Math.random()*0.3;
	  	var endPositionLeft=Math.random()*documentWidth;
	  	var endPositionTop=documentHeight;
	  	var fallSpeed=4000+Math.random()*3000;
	  	var snowSize=minsize+Math.random()*maxsize;
	   snow.clone().appendTo("body").css({
	   "left":startPositionLeft,
	   "font-size":snowSize,
	   "opacity":startOpacity,
	   "color":snowColor
	   
	   }).animate({
	   	"top":endPositionTop,
	   	"left":endPositionLeft,
	   	"opacity":0.5,
	   },fallSpeed,function(){
	   	$(this).remove();
	   });
	  	
	  },time1);
})