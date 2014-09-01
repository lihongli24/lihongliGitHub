package com.li.base.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.li.base.entity.MemberBind;
import com.li.controller.LoginController;

public class LoginInterceptor extends HandlerInterceptorAdapter{
	private Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		super.postHandle(request, response, handler, modelAndView);
	}
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		/*HandlerMethod method = (HandlerMethod) handler;
		if(method.getBean() instanceof LoginController){
			return true;
		}
		MemberBind memberBind = (MemberBind) request.getSession().getAttribute("user");
		if(memberBind == null){
			logger.info("抱歉，您得先登录了");
			response.sendRedirect(request.getContextPath());
			return false;
		}else{
			logger.info("你已经登录了");
			return true;
		}*/
		return true;
	}
}
