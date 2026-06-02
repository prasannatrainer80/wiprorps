package com.java.hib;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;

public class Cr5 {
	public static void main(String[] args) {
		SessionFactory sessionFactory = new 
				AnnotationConfiguration().configure().buildSessionFactory();
		Session session = sessionFactory.openSession();
		Criteria criteria = session.createCriteria(Employ.class);
		criteria.add(Restrictions.between("basic", 90000.00,99000.00));
		List<Employ> employList = criteria.list();
		employList.forEach(System.out::println);
	}
}
