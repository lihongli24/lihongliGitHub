
//停止事件的执行
var stopCallEven = function (evt) { 
		
		if(evt==null)evt=window.event;   		
        
    if(evt.stopPropagation)   evt.stopPropagation();
	  else evt.cancelBubble=true;
	  if(evt.preventDefault)  evt.preventDefault();
	  else evt.returnValue=false;      
}

//捕捉单击事件
var onclicks = function (evt) {
		if(evt==null)evt=window.event;
		
		var src = evt.srcElement || evt.target; // 获取触发事件的源对象
		if (src && src.getAttribute("target")) {
			
  		if (src.getAttribute("target").toLowerCase() == "_blank" || src.getAttribute("target").toLowerCase == "blank") {
  				 var win = null;
			      var shref = src.getAttribute("href");	
			      var title = src.innerHTML;			
			      stopCallEven(evt); //停止执行事件			      
			      	
			      /*
			      if(!win && shref){
			      		stopCallEven(evt); //停止执行事件
			      		var swid = document.body.clientWidth * 0.618;
			      		var sheigh = document.body.clientHeight * 0.618;
								var iframeHtml = "<iframe src='"  + shref + "' width='100%' height='100%'></iframe>";
			          win = new Ext.Window({
			              layout: 'fit',
			              title: '弹出窗口',
			              width:swid,
		              	height:sheigh,
			              
			              modal:true,
			              minimizable:true,
			              html:iframeHtml
			          });
			          
			      }*/
			      window.parent.showWindow(shref,title) ;
			      
			      //win.show();
  		}
  	}				
}
