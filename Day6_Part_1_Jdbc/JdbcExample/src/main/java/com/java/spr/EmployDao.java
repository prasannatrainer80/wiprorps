package com.java.spr;

import java.util.List;

public interface EmployDao {
	List<Employ> showEmployDao();
	Employ searchEmploy(int empno);
}
