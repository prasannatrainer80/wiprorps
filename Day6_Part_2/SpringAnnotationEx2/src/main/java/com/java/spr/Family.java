package com.java.spr;

public class Family {

	private String city;
	private String state;
	public Family() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Family(String city, String state) {
		super();
		this.city = city;
		this.state = state;
	}
	@Override
	public String toString() {
		return "Family [city=" + city + ", state=" + state + "]";
	}

}
