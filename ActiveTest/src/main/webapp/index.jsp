<%@page import="com.li.jms.MessageProducer"%>
<%@page import="org.springframework.context.support.ClassPathXmlApplicationContext"%>
<html>
<body>
<%
	ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
	MessageProducer producer = ctx.getBean("smsMessageProducer");
	producer.sendQueue("aa");
%>
</body>
</html>
