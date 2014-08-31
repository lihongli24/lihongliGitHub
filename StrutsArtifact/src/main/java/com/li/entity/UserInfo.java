package com.li.entity;

public class UserInfo {
	private Integer id;
	private String userName;
	private Integer age;
	public UserInfo(String userName) {
		this.id = 1;
		this.userName = userName;
		this.age = 13;
	}
	
	public UserInfo() {
		super();
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}

}
