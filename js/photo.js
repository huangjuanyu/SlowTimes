function slider(){
	var ul=document.getElementById("ul");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var num=0;
	right.onclick=function(){
		num=num>2?num:num+1;			
		ul.style.transform="translateX("+(-73.8*num)+"rem)";		
	};
	left.onclick=function(){
		num=num<1?num:num-1;
		ul.style.transform="translateX("+(-73.8*num)+"rem)";
	};
}
var picsPath=[
	"images/fj_img1.jpg",
	"images/fj_img2.jpg",
	"images/fj_img3.jpg",
	"images/fj_img4.jpg",
	"images/fj_img5.jpg",
	"images/fj_img6.jpg",
	"images/fj_img7.jpg",
	"images/fj_img8.jpg",
	"images/fj_img9.jpg"
];
var color=[
	"rgba(235,212,61,.35)",
	"rgba(243,107,212,.35)",
	"rgba(61,171,235,.35)",
	"rgba(61,171,126,.35)",
	"rgba(242,11,109,.35)"
];
var index=0;
function show(){
	var htmlImgs="";
	var rotate=360/picsPath.length;
	for(var i=0;i<picsPath.length;i++){
		htmlImgs+='<img src=\"'+picsPath[i]+'\">';
	}
	var container=document.getElementById("container");
	container.innerHTML=htmlImgs;
	var transZ=(container.offsetWidth/2)/Math.tan((rotate/2/180)*Math.PI);
	var imgs=Array.prototype.slice.call(container.getElementsByTagName('img'),0);
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.transform='rotateY('+i*rotate+'deg) translateZ('+(transZ+20)+'px)';
	}
	container.onclick=function(){
		this.style.transform='rotateY('+(-1*rotate*(++index))+'deg)';
		var stage=document.getElementById("stage");
		stage.style.boxShadow="inset 0 0 5rem "+color[Math.round(Math.random()*3)];
	}
}
window.onload=function(){
	slider();
	show();
	showSubmit();
};