<html>
<body>
<form action="<%=request.getContextPath()%>/member/login/execute.htm" method="post">
	<input name="user.userId" id="user.userId" type="text"/> <br />
	<input name="user.userName" id="user.userName" type="text"/> <br />
	<input name="page.pageSize" id="page.pageSize" type="text"/> <br />
	
	<input type="submit" value="submit" />
</form>
</body>
</html>
