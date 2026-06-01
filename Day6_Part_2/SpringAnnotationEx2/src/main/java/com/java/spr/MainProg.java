package com.java.spr;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainProg {
  public static void main(String[] args) {
    AnnotationConfigApplicationContext ctx =
      new AnnotationConfigApplicationContext(AppConfig.class);

    Person p1 = ctx.getBean("personSunil", Person.class);
    Person p2 = ctx.getBean("personVarsha", Person.class);
    Person p3 = ctx.getBean("personGokul", Person.class);
    Person p4 = ctx.getBean("personSakshi", Person.class);

    p1.showInfo();
    System.out.println("===================================");
    p2.showInfo();
    System.out.println("===================================");
    p3.showInfo();
    System.out.println("===================================");
    p4.showInfo();
  }
}
