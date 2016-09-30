function showMap(){
  var map = new AMap.Map('map', {
    resizeEnable: true,
    zoom:6,
    center: [116.2695662200,40.1312580041]
  });
  var marker = new AMap.Marker({
      position: [116.480983, 39.989628],
      map:map
  });
  AMap.plugin('AMap.AdvancedInfoWindow',function(){
    var infowindow = new AMap.AdvancedInfoWindow({
      content:"",
      offset: new AMap.Pixel(0, -30),
      asOrigin:true
    });
    infowindow.open(map,new AMap.LngLat(116.480983, 39.989628));
  });
  AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
      var toolBar = new AMap.ToolBar();
      var scale = new AMap.Scale();
      map.addControl(toolBar);
      map.addControl(scale);
  });
}
function blurs(){
  var blurfocus=document.getElementsByClassName("blurfocus");
  for(var i=0;i<blurfocus.length;i++){
    blurfocus.index=i;
    blurfocus[blurfocus.index].onfocus=function(){
      if(this.value!=null){
        this.value="";
      }
    };
    blurfocus[blurfocus.index].onblur=function(){
      this.value=this.title;
    };
  }
}
window.onload=function(){
  blurs();
  showSubmit();
  showMap();
};