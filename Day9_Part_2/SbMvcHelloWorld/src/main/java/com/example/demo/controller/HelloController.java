package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class HelloController {

	@RequestMapping(value="/")
    public String home() {
        return "home";
    }
	
	@RequestMapping(value="/nameinput")
	public String nameInput() {
		return "nameinput";
	}
	
	@RequestMapping(value="/calcinput")
	public String calcinput() {
		return "calcinput";
	}
	
	@RequestMapping(value="/calcresult")
	    public String calcresult(Model model,HttpServletRequest request){
	        int firstNo, secondNo, result;
	        firstNo = Integer.parseInt(request.getParameter("firstNo"));
	        secondNo = Integer.parseInt(request.getParameter("secondNo"));
	        result = firstNo + secondNo;
	        model.addAttribute("firstNo", firstNo);
	        model.addAttribute("secondNo", secondNo);
	        model.addAttribute("sum", result);
	        result = firstNo - secondNo;
	        model.addAttribute("sub", result);
	        result = firstNo * secondNo;
	        model.addAttribute("mult", result);
	        return "calcresult";
	    }

	
	@RequestMapping(value="/nameshow")
    public String nameShow(Model model, HttpServletRequest request) {
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String fullName = firstName + " " + lastName;
        model.addAttribute("firstName", firstName);
        model.addAttribute("lastName", lastName);
        model.addAttribute("fullName", fullName);
        return "nameshow";
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
