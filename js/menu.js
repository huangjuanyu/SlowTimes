function showSubmit(){
	var spanBtn=document.getElementById('spanBtn');
	var menu2=document.getElementsByClassName('menu2')[0];
	var nones=document.getElementsByClassName('none');
	var lis=menu2.getElementsByTagName('li');
	var slow=document.getElementsByClassName('slow');
	var subMenu2=document.getElementsByClassName('subMenu2');
	var times;
	spanBtn.onclick=function(){
		if(menu2.offsetHeight>0){
			menu2.style.display="none";
			for(var i=0;i<nones.length;i++){
				nones[i].style.display="block";
			}
			menu2.style.animationName="two";
		}else{
			menu2.style.display="block";
			menu2.style.animationName="one";
			for(var j=0;j<nones.length;j++){
				nones[j].style.display="none";
			}
		}

	};
	for(var i=0;i<lis.length;i++){
		(function(i){
			lis[i].onmouseover=function(){
				var lisa=lis[i].getElementsByTagName('a')[0];
				lisa.style.background="#fff";
				lisa.style.color="#000";
			};
			lis[i].onmouseout=function(){
				var lisa=lis[i].getElementsByTagName('a')[0];
				lisa.style.background="";
				lisa.style.color="";
			};
		})(i);
	}
	// for(var j=0;j<slow.length;j++){
	// 	(function(j){
	// 		slow[j].onmouseover=function(){
	// 			slow[j].style.background="orange";
	// 			subMenu2[j].style.display="block";
	// 		};
	// 		slow[j].onmouseout=function(){
	// 			times=setTimeout(function(){
	// 				slow[j].style.background="";
	// 				subMenu2[j].style.display="none";
	// 			},500);
	// 		};
	// 	})(j);
	// }
}