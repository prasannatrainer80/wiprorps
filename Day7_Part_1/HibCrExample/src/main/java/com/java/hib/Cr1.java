package com.java.hib;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Order;

public class Cr1 {
	public static void main(String[] args) {
		SessionFactory sf = new AnnotationConfiguration().configure().buildSessionFactory();
		Session session =sf.openSession();
		Criteria cr = session.createCriteria(Employ.class);
		cr.addOrder(Order.desc("basic"));
		cr.list().forEach(System.out::println);
	}
}
