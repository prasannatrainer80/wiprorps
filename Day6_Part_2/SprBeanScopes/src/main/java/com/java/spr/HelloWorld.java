package com.java.spr;

public class HelloWorld {

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  private String name;

  public void show() {
    System.out.println("Name is  " +name);
  }

}
