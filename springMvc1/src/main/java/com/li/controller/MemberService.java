package com.li.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
	
	@Autowired
	private HttpServletRequest request;
	
	
	public void sayUserName(){
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("user");
		System.out.println("userName in service is " + userName);
	}

}
