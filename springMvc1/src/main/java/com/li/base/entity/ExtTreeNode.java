package com.li.base.entity;


import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;

public class ExtTreeNode {
	private String id;
	private String href;
	private String iconCls;
	private String text;
	private boolean singleClickExpand;
	private boolean expanded;
	private String cls;
	private boolean leaf;
	private boolean isClass;
	private List<ExtTreeNode> children = new ArrayList<ExtTreeNode>(0);

	public ExtTreeNode(String id, String href, String iconCls, String text,
			boolean singleClickExpand, boolean expanded, String cls,
			boolean leaf, boolean isClass) {
		super();
		this.id = id.replaceAll("/", "_");
		this.href = href;
		this.iconCls = iconCls;
		this.text = text;
		this.singleClickExpand = singleClickExpand;
		this.expanded = expanded;
		this.cls = cls;
		this.leaf = leaf;
		this.isClass = isClass;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the href
	 */
	public String getHref() {
		return href;
	}

	/**
	 * @param href
	 *            the href to set
	 */
	public void setHref(String href) {
		this.href = href;
	}

	/**
	 * @return the iconCls
	 */
	public String getIconCls() {
		return iconCls;
	}

	/**
	 * @param iconCls
	 *            the iconCls to set
	 */
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	/**
	 * @return the text
	 */
	public String getText() {
		return text;
	}

	/**
	 * @param text
	 *            the text to set
	 */
	public void setText(String text) {
		this.text = text;
	}

	/**
	 * @return the singleClickExpand
	 */
	public boolean isSingleClickExpand() {
		return singleClickExpand;
	}

	/**
	 * @param singleClickExpand
	 *            the singleClickExpand to set
	 */
	public void setSingleClickExpand(boolean singleClickExpand) {
		this.singleClickExpand = singleClickExpand;
	}

	/**
	 * @return the expanded
	 */
	public boolean getExpanded() {
		return expanded;
	}

	/**
	 * @param expanded
	 *            the expanded to set
	 */
	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}

	/**
	 * @return the cls
	 */
	public String getCls() {
		return cls;
	}

	/**
	 * @param cls
	 *            the cls to set
	 */
	public void setCls(String cls) {
		this.cls = cls;
	}

	/**
	 * @return the leaf
	 */
	public boolean isLeaf() {
		return leaf;
	}

	/**
	 * @param leaf
	 *            the leaf to set
	 */
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	/**
	 * @return the isClass
	 */
	public boolean isClass() {
		return isClass;
	}

	/**
	 * @param isClass
	 *            the isClass to set
	 */
	public void setClass(boolean isClass) {
		this.isClass = isClass;
	}

	/**
	 * @return the children
	 */
	public List<ExtTreeNode> getChildren() {
		return children;
	}

	/**
	 * @param children
	 *            the children to set
	 */
	public void setChildren(List<ExtTreeNode> children) {
		this.children = children;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

	public void addChildren(ExtTreeNode node) {
		getChildren().add(node);
	}
}
