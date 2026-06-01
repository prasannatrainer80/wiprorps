package com.java.spr;

public class HelloImpl implements Hello {

	private String greeting;
	
	public HelloImpl() {

	}

	public HelloImpl(String greeting) {
		this.greeting = greeting;
	}

	@Override
	public String sayHello(String name) {
		return greeting + name;
	}

}
