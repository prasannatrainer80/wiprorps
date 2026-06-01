package com.java.spr;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainProg {
	public static void main(String[] args) {
		ApplicationContext ctx = new 
				ClassPathXmlApplicationContext("com/java/spr/person.xml");
		Person personHitasree = (Person)ctx.getBean("personHitasree");
		personHitasree.showAllInfo();
		
		Person personPankaj = (Person)ctx.getBean("personPankaj");
		personPankaj.showAllInfo();
		
		Person personKruthi = (Person)ctx.getBean("personKruthi");
		personKruthi.showAllInfo();
	}
}
