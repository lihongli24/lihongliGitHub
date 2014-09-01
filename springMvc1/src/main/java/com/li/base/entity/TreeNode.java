package com.li.base.entity;


import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;

public class TreeNode {
	private String id;
	private String text;
	private boolean expanded;
	private String classes;
	private boolean hasChildren;
	private List<TreeNode> children = new ArrayList<TreeNode>(0);
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @return the text
	 */
	public String getText() {
		return text;
	}
	/**
	 * @return the expanded
	 */
	public boolean isExpanded() {
		return expanded;
	}
	/**
	 * @return the classes
	 */
	public String getClasses() {
		return classes;
	}
	
	/**
	 * @return the children
	 */
	public List<TreeNode> getChildren() {
		return children;
	}
	/**
	 * @param children the children to set
	 */
	public void setChildren(List<TreeNode> children) {
		this.children = children;
	}
	/**
	 * @return the hasChildren
	 */
	public boolean isHasChildren() {
		return hasChildren;
	}
	public TreeNode(String id, String text, boolean expanded, String classes,
			boolean hasChildren) {
		super();
		this.id = id;
		this.text = text;
		this.expanded = expanded;
		this.classes = classes;
		this.hasChildren = hasChildren;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
	public void addChild(TreeNode node){
		getChildren().add(node);
	}
}
