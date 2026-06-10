package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping(value="/")
	public String sayHello() {
		return "Welcome to Jenkins DOcker...";
	}
	
	@GetMapping(value="/topic")
	public String topic() {
		return "Jenkins Sb going on...";
	}
	
}
