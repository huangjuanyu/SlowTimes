var currentNum=0;
var interval;
function showNext(){
	var box=document.getElementById('box');
	var divObjs=box.getElementsByTagName('div');	
	divObjs[currentNum].className="preDiv";
	currentNum=(currentNum+1==divObjs.length)?0:currentNum+1;
	divObjs[currentNum].className="currentDiv";
}

window.onload=function(){
	interval=setInterval("showNext()",2000);
	showSubmit();
};