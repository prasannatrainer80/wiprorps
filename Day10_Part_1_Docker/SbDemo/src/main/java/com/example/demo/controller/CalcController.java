package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalcController {

	
	@GetMapping(value="/sum/{a}/{b}")
	public int sum(@PathVariable int a, 
		@PathVariable int b) {
		int c = a + b;
		return c;
	}
	
	@GetMapping(value="/sub/{a}/{b}")
	public int sub(@PathVariable int a, 
		@PathVariable int b) {
		int c = a - b;
		return c;
	}
	
	@GetMapping(value="/mult/{a}/{b}")
	public int mult(@PathVariable int a, 
		@PathVariable int b) {
		int c = a * b;
		return c;
	}
}
