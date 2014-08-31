<#escape x as x!""><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>后台</title>
<style type="text/css">
</style>
</head>
<body>
<div class="w450"><div class="title">
  <h1>登录</h1>
</div>
<div>
	<form action="${request.contextPath}/login-info!pass.action">
	  <label  class="labelTag"><span class="red">*</span> 用户名</label>
	  <input name="userName" id="userName" value="" type="text"  class="enterBox"  /><br />
	  <input type="submit" name="tt" value="登录" id="login_button" />
	</form>
</div>
</body>
</html></#escape>
