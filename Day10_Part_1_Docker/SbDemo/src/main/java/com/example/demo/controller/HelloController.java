package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping(value="/")
	public String sayHello() {
		return "Welcome to Spring Boot Programming...";
	}
	
	@GetMapping(value="/company")
	public String company() {
		return "From Wipro...";
	}
	
	@GetMapping(value="/trainer") 
	public String trainer() {
		return "Trainer is Prasanna...";
	}
}
