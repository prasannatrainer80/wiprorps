package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Employ;

@Service
public class EmployService {

	List<Employ> employList = Arrays.asList(
			new Employ(1, "Hitasree", 84834),
			new Employ(2, "Bharath", 94234),
			new Employ(3, "Teja", 92245),
			new Employ(4, "Mounish", 90124)
			);
	
	public List<Employ> showEmploy() {
		return employList;
	}
	
	public Employ searchEmploy(int empno) {
		return employList.stream().filter(x -> x.getEmpno() == empno).findFirst().get();
	}
}
