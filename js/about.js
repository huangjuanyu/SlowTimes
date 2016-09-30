function lasheng(){
	var aSpan=document.getElementsByClassName("span");
	var aDiv=document.getElementsByClassName("div");
	for(var i=0; i<aSpan.length;i++){
		(function(x){
				aSpan[x].onclick=function(){
					if(aDiv[x].offsetHeight>0){
						aSpan[x].className="span";
						aDiv[x].className="div";
						}
					else{
						toBack();
						aDiv[x].className+=" toShow";
						}
				}
			})(i);
		}
		function toBack(){
			for(var j=0;j<aSpan.length;j++){
				aSpan[j].className="span";
				aDiv[j].className="div";
				}
			}
}
window.onload=function(){
	showSubmit();
	lasheng();
};