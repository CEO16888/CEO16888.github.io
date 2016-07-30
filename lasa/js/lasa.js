$(function(){
	
	$("#lasa li").mouseover(function(){
		$(this).stop(true).animate({"width":"800px"},500).siblings().stop(true).animate({"width":"100px"},500);
	});
});