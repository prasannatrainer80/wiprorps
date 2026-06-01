package com.java.spr;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainProg2 {
  public static void main(String[] args) {
    ApplicationContext ctx =
      new ClassPathXmlApplicationContext("com/java/spr/hello1.xml");
    HelloWorld hw1 = (HelloWorld)ctx.getBean("bean1");
    HelloWorld hw2 = (HelloWorld)ctx.getBean("bean1");
    HelloWorld hw3 = (HelloWorld)ctx.getBean("bean1");

    System.out.println(hw1.hashCode());
    System.out.println(hw2.hashCode());
    System.out.println(hw3.hashCode());
  }
}
