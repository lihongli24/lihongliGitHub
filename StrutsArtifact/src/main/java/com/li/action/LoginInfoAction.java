package com.li.action;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.li.entity.UserInfo;

@SuppressWarnings("serial")
public class LoginInfoAction extends LiActionSupport<UserInfo>{
	private Logger logger = LoggerFactory.getLogger(LoginInfoAction.class);
	
	private UserInfo userInfo;
	
	private String userName;

	@Override
	public void prepare() throws Exception {
		logger.info("执行了prepare");
		if(userName == null){
			logger.error("用户名为空");
		}else{
			userInfo = new UserInfo(userName);
		}
		
	}

	@Override
	public UserInfo getModel() {
		logger.info("执行了getModel");
		return userInfo;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	@Override
	public String execute() throws Exception {
		logger.info("执行了execute");
		return SUCCESS;
	}
	
	public String pass(){
		logger.info("执行了pass");
		return "pass";
	}
	

}
