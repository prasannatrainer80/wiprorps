package com.java.hib;

import java.util.Scanner;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;

public class EmployDeleteMain {
	public static void main(String[] args) {
		int empno;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employ No   ");
		empno = sc.nextInt();
		SessionFactory sessionFactory = 
				new AnnotationConfiguration().configure().buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Query query = session.createQuery("from Employ where empno="+empno);
		Employ employFound = (Employ)query.uniqueResult();
		if (employFound != null) {
			Transaction trans = session.beginTransaction();
			session.delete(employFound);
			trans.commit();
			System.out.println("*** Employ Record Deleted ***");
		} else {
			System.out.println("*** Record Not Found ***");
		}
	}
}
