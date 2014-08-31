package com.li.jms;

import javax.jms.Destination;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class MessageProducer {
	private JmsTemplate jmsTemplate;
	private Destination smsQueue;

	public void setJmsTemplate(JmsTemplate jmsTemplate) {
		this.jmsTemplate = jmsTemplate;
	}

	public void setSmsQueue(Destination smsQueue) {
		this.smsQueue = smsQueue;
	}
	
	public void sendQueue(final Object obj){
		jmsTemplate.convertAndSend(smsQueue,obj);
	}
}
