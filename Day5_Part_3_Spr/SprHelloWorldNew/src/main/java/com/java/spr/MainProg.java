package com.java.spr;

import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainProg {
	public static void main(String[] args) {
		Date obj = new Date();
		int hr = obj.getHours();
		ApplicationContext ctx = new 
				ClassPathXmlApplicationContext("com/java/spr/hello.xml");
		HelloImpl impl = null;
		if (hr < 12) {
			impl = (HelloImpl)ctx.getBean("bean1");
		} else if (hr >= 12 && hr < 16) {
			impl = (HelloImpl)ctx.getBean("bean2");
		} else {
			impl = (HelloImpl)ctx.getBean("bean3");
		}
		
		System.out.println(impl.sayHello("Amar"));
	}
}
