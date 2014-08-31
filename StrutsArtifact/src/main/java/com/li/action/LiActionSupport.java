package com.li.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.opensymphony.xwork2.Preparable;



@SuppressWarnings("serial")
public abstract class LiActionSupport<T> extends ActionSupport implements ModelDriven<T>, Preparable {

	public abstract void prepare() throws Exception;

	public abstract T getModel();

}
