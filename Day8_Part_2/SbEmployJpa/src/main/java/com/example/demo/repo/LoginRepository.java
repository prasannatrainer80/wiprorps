package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Login;

public interface LoginRepository extends JpaRepository<Login, String> {

	Login findByUsernameAndPasscode(String username,String passcode);
}
