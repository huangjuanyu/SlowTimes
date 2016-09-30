var parts=null;
var add=[
		"url(./images/sg_pic1.jpg)",
		"url(./images/s2.jpg)",
		"url(./images/s3.jpg)",
		"url(./images/s4.jpg)"
		];
var num=1;
// var total=3;
function initParts(){
	var container=document.getElementById("container");
	var childs=container.getElementsByTagName('div');
	parts=Array.prototype.slice.call(childs,0);
}
function turn(flag){
	if(flag)
		num=(num+1>add.length)?1:num+1;
	else
		num=(num-1<1)?add.length:num-1;
	document.getElementById("container").style.backgroundImage=add[num-1];
	document.getElementById("container").style.animationName='container';
	for(var i=0;i<parts.length;i++){
		parts[i].style.animationName='part'+(i+1)+(flag?'-old':'-new');
	}
	setTimeout(function(){
		document.getElementById("container").style.animationName='none';
		for(var i=0;i<parts.length;i++){
			parts[i].style.backgroundImage=add[num-1];
			parts[i].style.animationName='none';
		}
	},700);
}
window.onload=function(){
	initParts();
	document.getElementById('right').onclick=function(){turn(true);};
	document.getElementById('left').onclick=function(){turn(false);};
}