package com.li.base.entity;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MemberBind implements HttpSessionBindingListener{
	private Logger logger = LoggerFactory.getLogger(MemberBind.class);
	private Integer id;
	private String name;
	public MemberBind(Integer id, String name){
		this.id = id;
		this.name = name;
	}

	public void valueBound(HttpSessionBindingEvent event) {
		logger.info("the user id : {},name : {}, bind success", this.id, this.name);
		
	}

	public void valueUnbound(HttpSessionBindingEvent event) {
		logger.info("the user id : {},name : {}, log out", this.id, this.name);
		
	}

}
