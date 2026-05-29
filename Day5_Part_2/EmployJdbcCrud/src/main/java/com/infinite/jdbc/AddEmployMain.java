package com.infinite.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class AddEmployMain {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int empno;
    String name,dept,desig,gender;
    double basic;
    System.out.println("Enter Employ Number  ");
    empno = sc.nextInt();
    System.out.println("Enter Employ Name ");
    name = sc.next();
    System.out.println("Enter Employ Gender(MALE/FEMALE) ");
    gender = sc.next();
    System.out.println("Enter Employ Department  ");
    dept = sc.next();
    System.out.println("Enter Employ Designation  ");
    desig = sc.next();
    System.out.println("Enter Employ Basic  ");
    basic = sc.nextDouble();

    try {
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection connection = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/infinite26","root",
        "root"
      );
      String cmd = "Insert into Employ(empno,name,gender," +
        "dept,desig,basic) values(?,?,?,?,?,?)";
      PreparedStatement pst = connection.prepareStatement(cmd);
      pst.setInt(1, empno);
      pst.setString(2, name);
      pst.setString(3, gender);
      pst.setString(4, dept);
      pst.setString(5, desig);
      pst.setDouble(6, basic);
      pst.executeUpdate();
      System.out.println("*** Employ Record Inserted ***");
    } catch (ClassNotFoundException e) {
      throw new RuntimeException(e);
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}
