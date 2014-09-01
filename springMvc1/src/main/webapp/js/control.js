var URLParams = new Object() ;
var aParams = document.location.search.substr(1).split('&') ;
for (i=0 ; i < aParams.length ; i++) {
	var aParam = aParams[i].split('=') ;
	URLParams[aParam[0]] = aParam[1] ;
}
function openwin(URLStr,width,height,left,top){
	try{
		if(!width)
			width = screen.width-10;
		if(!height)
			height = screen.height-100;
		if(!left)
			left = 0;
		if(!top)
			top = 0;
	}
	catch(e){
		width = 800;
		height = 600;
		left = 50;
		top = 30;
	}
	var win = window.open(URLStr,'o', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,copyhistory=yes,top='+top+',left='+left+',width='+width+',height='+height+'');
	return win;
}
function firstChecked(){
	var f = document.adminForm;
	if(f.cb && f.cb.checked)
		return f.cb.value;
	if(f.cb && f.cb.length > 0){
		for(var ii=0;ii<f.cb.length;ii++){
			if(f.cb[ii] && f.cb[ii].checked && !f.cb[ii].disabled)
				return f.cb[ii].value;
		}
	}
	return "";
}
function submitPage( page ){
    var f = document.adminForm;
    if( f.task && f.task.value!='search' )
    	f.task.value = 'search';
	f['page.pageNo'].value = page;
	f.submit();
}
function sort(orderBy,defaultOrder){
    var f = document.adminForm;
    
    if( f.task && f.task.value!='search' )
    	f.task.value = 'search';
	if( f['page.orderBy'].value==orderBy ){
		if(f['page.order'].value=="")
			f['page.order'].value = defaultOrder;
		else if(f['page.order'].value=="desc")
			f['page.order'].value = "asc";
		else if(f['page.order'].value=="asc")
			f['page.order'].value = "desc";
	}
	else{
		f['page.orderBy'].value = orderBy;
		f['page.order'].value = defaultOrder;
	}
	
	f.submit();
}
function checkAll( n ) {
	var f = document.adminForm;
	var c = f.toggle.checked;
	var n2 = 0;
	for (i=0; i < n; i++) {
		cb = eval( 'f.cb' + (i) );
		if (cb && !cb.disabled) {
			cb.checked = c;
			n2++;
		}
	}
	if (c) {
		document.adminForm.boxchecked.value = n2;
	} else {
		document.adminForm.boxchecked.value = 0;
	}
}
function isChecked(isitchecked){
	if (isitchecked == true){
		document.adminForm.boxchecked.value++;
	}
	else {
		document.adminForm.boxchecked.value--;
	}
}
var lastCkedIndex = -1;
function isCked(ck,evt){
	evt = evt ? evt : (window.event ? window.event : null);
	var cur = parseInt(ck.id.substring(2));
	if(evt.shiftKey){
		
		var f = document.adminForm;			
		var n = f.cb.length;
		var flag = false;
		
		if(lastCkedIndex!=-1){
			for (var i = Math.min ( lastCkedIndex , cur ) + 1; i < Math.max ( lastCkedIndex , cur ); i++){
				cb = eval( 'f.cb' + (i) );
				if (cb) {
					cb.checked = !cb.checked;
					if (cb.checked)
						document.adminForm.boxchecked.value++;
					else
						document.adminForm.boxchecked.value--;
				}
			}
		}
	}
	lastCkedIndex = cur;
	if (ck.checked){
		document.adminForm.boxchecked.value++;
	}
	else {
		document.adminForm.boxchecked.value--;
	}
}
function submitItem( id , task ){
	var f = document.adminForm;
	
	//uncheck others
	var mycb = f.cb ? f.cb : document.getElementsByName('cb');
	if(!mycb)
		return;
	var n = mycb.length;
	for (i=0; i < n; i++) {
		cb = eval( 'f.cb' + (i) );
		if (cb)
			cb.checked = false;
	}
	
	cb = eval( 'f.' + id );
	if (cb) {
		cb.checked = true;
		document.adminForm.boxchecked.value++;
		submitForm(task);
	}
}