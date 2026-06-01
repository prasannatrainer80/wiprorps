package com.java.spr;

public class Person {

	    private int id;
	    private String name;
	    private JobDetails jobDetails;
	    private Family family;


	    public void showInfo() {
	        System.out.println("Id: " + id);
	        System.out.println("Name: " + name);
	        System.out.println("Job: " + jobDetails);
	        System.out.println("Family: " + family);
	        System.out.println("----------------------");
	    }


		public Person() {
			super();
			// TODO Auto-generated constructor stub
		}


		public Person(int id, String name, JobDetails jobDetails, Family family) {
			super();
			this.id = id;
			this.name = name;
			this.jobDetails = jobDetails;
			this.family = family;
		}



}
