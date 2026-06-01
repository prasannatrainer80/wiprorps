package com.java.spr;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainProg {
	public static void main(String[] args) {
		ApplicationContext ctx = 
				new AnnotationConfigApplicationContext(AppConfig.class);
		 Hello hello = ctx.getBean("beanHello", Hello.class);
		    hello.sayHello("Prasanna");

	}
}
