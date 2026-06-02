package com.java.hib;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;

public class Cr3 {
	public static void main(String[] args) {
		SessionFactory sessionFactory = new 
				AnnotationConfiguration().configure().buildSessionFactory();
		Session session = sessionFactory.openSession();
		 Criteria cr = session.createCriteria(Employ.class);
		 cr.add(Restrictions.eq("dept", "Java"));
		 cr.add(Restrictions.ge("basic", 85000.00));
		 cr.list().forEach(System.out::println);
	}
}
