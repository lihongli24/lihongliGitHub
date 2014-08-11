package com.li.jms;

import javax.jms.Message;
import javax.jms.MessageListener;

public class MyMessageListener implements MessageListener{

	public void onMessage(Message arg0) {
		System.out.println(arg0.toString());
	}

}
