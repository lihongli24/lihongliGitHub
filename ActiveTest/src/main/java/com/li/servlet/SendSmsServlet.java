package com.li.servlet;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

import com.li.jms.MessageProducer;

/**
 * Servlet implementation class SendSmsServlet
 */
public class SendSmsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Integer index = 1;
	private MessageProducer smsMessageProducer;
	static{
		System.out.println("servlet+++++++++++++");
	}

	public MessageProducer getSmsMessageProducer() {
		return smsMessageProducer;
	}

	public void setSmsMessageProducer(MessageProducer smsMessageProducer) {
		this.smsMessageProducer = smsMessageProducer;
	}

	/**
	 * Default constructor.
	 */
	public SendSmsServlet() {
		System.out.println("bbbb");
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	public void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.out.println("asss");
		index ++;
		Map<String, String> map = new HashMap<String, String>();
		map.put(index.toString(), new Date(System.currentTimeMillis()).toString());
		smsMessageProducer.sendQueue(map);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	public void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.out.println("asss");
		this.doGet(request, response);
	}

}
