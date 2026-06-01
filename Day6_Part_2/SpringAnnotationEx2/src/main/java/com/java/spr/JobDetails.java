package com.java.spr;

public class JobDetails {

	 private String job;
     private String company;
     private String location;
	public JobDetails() {

	}
	public JobDetails(String job, String company, String location) {
		this.job = job;
		this.company = company;
		this.location = location;
	}

	@Override
	public String toString() {
		return "JobDetails [job=" + job + ", company=" + company + ", location=" + location + "]";
	}

}
