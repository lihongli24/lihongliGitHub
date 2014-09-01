/*
 * requirement :
 * 
 * /js/jquery/jquery.js
 * /js/jquery/plugins/selectboxes/jquery.selectboxes.js
 * 
 */
var tempContextPath = "";
if(region_url_contextPath)
	tempContextPath = region_url_contextPath;
var AJAX_REGION_URL = tempContextPath + "/common/ajax/region/children.htm"; //地区选择地址
/**
 * 为SELECT控件生成与地区相关的OPTIONS
 * @param id " 选择框ID,如#city " (required)
 * @param pid " 上级地区ID，一级地区PID为0 " (required)
 * @param sid " 选中的值 " (optional)
 * @param text " 第一个选项(值为空)的内容 " (optional)
 * @param eids " 要清空的选择框ID，如#city,#restrict "  (optional)
 * @return NaN
 */
function createRegion(id, pid, sid, text, eids){
	if(!text)
		text = "请选择 ...";
	if(!eids)
		eids = id;
	else
		eids = id + "," + eids;
	if( pid >= "0" ){
		$.ajax({
			type: "GET",
			url: AJAX_REGION_URL,
			data: "pid=" + pid, 
			dataType: "json",
			success: function( data ){
				var el = $(id);
				$(eids).removeOption(/./);
				if ( text ) 
					el.addOption("",text);
				$.each(data,function(i,item){
					el.addOption(item.regionId,item.regionName,( sid == item.regionId ));
				});
			}
		});
	}
	else
		$(eids).removeOption(/./);
}

/**
 * 为id为sid的input=hidden控件生成地区选择框
 * @param sid " 存放选中地区id的表单隐藏域 "
 * @param ele " 生成select并加在ele后 "
 * @param text " 第一个选项(值为空)的内容 " (optional)
 * @param pid " 上级地区id "
 * @param type " default replace, 1 append"
 * @param seid 选中地区id
 */
function createRegionSelect(sid, ele, text, pid, type,seid){
	
	if(!text)
		text = "请选择 ...";
	if(!pid)
		pid = 1;
	
	if (pid == 0 && type == 1)
		return;
	
	$.ajax({
		type: "GET",
		url: AJAX_REGION_URL,
		data: "pid=" + pid, 
		dataType: "json",
		success: function( data ){
			
			if (data.length > 0){
				var el = $("<select/>");
				
				el.bind("change", function(event){
					if(typeof(changeRegion)== "function")
						changeRegion($(this).val());
					$("#" + sid).val($(this).val());
					$(this).nextAll("select").remove();
					createRegionSelect(sid, this, text, $(this).val(), 1,seid);
				}); 
				
				if ( text ) 
					el.addOption("",text);
				$.each(data,function(i,item){
					el.addOption(item.regionId,item.regionName,( seid == item.regionId ));
				});
				
				if (type == 1){
					$(ele).after(el);
				}
				else{
					$(ele).replaceWith(el);
				}
				
			}
		}
	});
}