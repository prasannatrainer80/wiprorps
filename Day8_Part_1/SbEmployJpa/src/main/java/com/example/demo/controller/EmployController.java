package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employ;
import com.example.demo.service.EmployService;


@RestController
public class EmployController {

	@Autowired
	private EmployService employService;
	
	@GetMapping(value="/showemploy")
	public List<Employ> showEmploy() {
		return employService.showEmploy();
	}
	
	@GetMapping(value="/searchemploy/{empno}")
	public Employ searchEmploy(@PathVariable int empno) {
		return employService.searchEmploy(empno);
	}
	
	@PostMapping(value="/addemploy")
	public String addEmploy(@RequestBody Employ employ) {
		System.out.println(employ);
		return employService.addEmploy(employ);
	}
	
	@PutMapping(value="/updateemploy")
	public String updateEmploy(@RequestBody Employ employ) {
		return employService.updateEmploy(employ);
	}
	
	@DeleteMapping(value="/deleteemploy/{empno}")
	public String deleteEmploy(@PathVariable int empno) {
		return employService.deleteEmploy(empno);
	}
}
