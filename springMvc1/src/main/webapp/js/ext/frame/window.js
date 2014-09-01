/*
 * Ext JS Library 2.2.1
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */


 function showWindow(shref,stitle,swidth,sheight)
 {
    	var globalwin = null;
      // create the window on the first click and reuse on subsequent clicks
      if(!globalwin){
					var iframeHtml = "<iframe src='"  + shref + "' width='100%' height='100%'></iframe>";
          globalwin = new Ext.Window({
              layout: 'fit',
              title: stitle,              
              width:swidth,
              height:sheight,
              x: 40,
              y: 60,
              html:iframeHtml
          });
          
      }
      
      globalwin.show();
      
}