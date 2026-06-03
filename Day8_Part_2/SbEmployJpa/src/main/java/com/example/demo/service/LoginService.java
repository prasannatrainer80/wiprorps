package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repo.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;
	
	public String login(String user, String pwd) {
		Login login = loginRepository.findByUsernameAndPasscode(user, pwd);
		if (login !=null) {
			return "1";
		}
		return "0";
	}
}
