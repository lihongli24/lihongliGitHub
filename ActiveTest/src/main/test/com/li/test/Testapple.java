package com.li.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.li.jms.MessageProducer;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath*:/applicationContext*.xml")
public class Testapple {

	@Autowired
	private MessageProducer smsMessageProducer;
	
	@Test
	public void testq1(){
		smsMessageProducer.sendQueue("aa");
	}
}
