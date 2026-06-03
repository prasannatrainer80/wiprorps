package com.example.demo.repo;

import com.example.demo.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;



public interface VendorRepository extends JpaRepository<Vendor, Integer> {
	Vendor findByVenUsername(String venUsername);
	Vendor findByVenUsernameAndVenPassword(String venUsername, String venPassword);
}
