package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

	@RequestMapping(value="/")
    public String home() {
        return "home";
    }
	
	@RequestMapping(value="/sunil")
	public String sunil() {
		return "sunil";
	}
	
	@RequestMapping(value="/sakshi")
	public String sakshi() {
		return "sakshi";
	}

}
