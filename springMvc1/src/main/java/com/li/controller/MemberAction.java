package com.li.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.li.base.entity.TreeNode;


@Controller
@RequestMapping(value="/member")
public class MemberAction {
	
	@RequestMapping(value = "/index")
	public String execute(HttpServletRequest request, Model model) throws Exception {
		return "loginSuccess";
	}
	
	@RequestMapping("/treeView")
	public @ResponseBody String treeView(HttpServletRequest request, Model model){
		List<TreeNode> ret = new ArrayList<TreeNode>(0);
		//构造根节点
		TreeNode tree =  new TreeNode(
				"source",
				getNodeString("所有权限",null, "", "", 0,null),
				true,
				"folder",
				false
			);
		/*List<AuthorityInfo> ds = findWithCache(
				Order.asc("authOrder"),
				"authority-query-info", //缓存区域为 query-category
				3600, //缓存时间为1小时
				Restrictions.isNull("parentAuthId")
			);
		for(AuthorityInfo d : ds){
			TreeNode node = getNode(d,codes,url,nodeType);
			tree.getChildren().add(node);
		}*/
		ret.add(tree);
		String result = JSONArray.fromObject(ret.toArray(new TreeNode[ret.size()])).toString();
		return result;
	}
	
	/**
	 * 根据节点类型返回结点内容
	 * @param name
	 * @param url
	 * @param code
	 * @param nodeType
	 * @return
	 */
	private String getNodeString(String name, Integer value, String url, String code, Integer nodeType,Collection<String> codes){
		StringBuilder nodeText =  new StringBuilder();
		if(url!=null){
			nodeText.append("<a href=\"");
			nodeText.append(StringUtils.replace(url, "{code}", code));
			nodeText.append("\">");
		}
		nodeText.append(name);
		if(url!=null)
			nodeText.append("</a>");
		return nodeText.toString();
	}

}
