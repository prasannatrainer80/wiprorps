package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping(value="/")
	public String home() {
		return "Welcome to Spring Boot Programming...";
	}
	
	@GetMapping(value="/topic") 
	public String topic() {
		return "Topic is Docker is Going On...";
	}
	
	@GetMapping(value="/company")
	public String company() {
		return "Company is Wipro...";
	}
}
