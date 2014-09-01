<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<%@ page isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script language="JavaScript" src="<%=request.getContextPath()%>/js/jquery/jquery-1.6.4.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery/plugins/treeview/jquery.treeview.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery/plugins/treeview/jquery.treeview.async.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/jquery/plugins/treeview/jquery.treeview.css" />  

<script type="text/javascript">
	$(document).ready(function() {
		$("#black").treeview({
			url : "<%=request.getContextPath()%>/member/treeView.htm"
		});
	});
</script>
</head>
<body>
	<h1 id="banner">
		<a href="http://bassistance.de/jquery-plugins/jquery-plugin-treeview/">jQuery
			Treeview Plugin  <%=request.getContextPath()%></a> Demo
	</h1>
	<div id="main">
		<a href=".">Main</a>
		<h4>Sample - async</h4>
		<div id="treecontrol">
			<a title="Collapse the entire tree below" href="#"><img
				src="images/minus.gif" /> Collapse All</a> <a
				title="Expand the entire tree below" href="#"><img
				src="images/plus.gif" /> Expand All</a> <a
				title="Toggle the tree below, opening closed branches, closing open branches"
				href="#">Toggle All</a>
		</div>
		<ul id="black">
		</ul>
	</div>
</body>
</html>