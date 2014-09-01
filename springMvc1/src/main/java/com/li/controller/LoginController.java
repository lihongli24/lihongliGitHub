package com.li.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.li.base.entity.Page;
import com.li.base.entity.User;

@Controller
@RequestMapping(value="/member/login")
public class LoginController {

	@Autowired
	private MemberService memberService;
	
	@RequestMapping(value = "/execute")
	public ModelAndView execute(@ModelAttribute User user, HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
		/*String name = request.getParameter("name");
		Integer id = Integer.valueOf(request.getParameter("id"));
		MemberBind memberBind = new MemberBind(id, name);
		return "loginSuccess";*/
		/*request.getSession().setAttribute("user", "aa");
		memberService.sayUserName();
		System.out.println("execute");
		return "redirect:reload.htm";*/
		response.setContentType("application/vnd.ms-excel; charset=utf-8");
		response.setHeader("Content-Disposition", "attachment; filename=ss.xls");
		ModelMap map = new ModelMap();
		ViewExcel view = new ViewExcel();
		return new ModelAndView(view);
	}
	
	
	
	@RequestMapping("reload")
	public String reload(@ModelAttribute User user, HttpServletRequest request, Model model) throws Exception {
		System.out.println("reload");
		return "loginSuccess";
	}

	
}
