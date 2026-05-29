package com.infinite.jdbc;

import java.sql.*;
import java.util.Scanner;

public class EmploySearchMain {
  public static void main(String[] args) {
    int empno;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter Employ Number  ");
    empno = sc.nextInt();
    try {
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection connection = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/infinite26","root",
        "root"
      );
      String cmd = "select * from Employ where empno = ?";
      PreparedStatement pst = connection.prepareStatement(cmd);
      pst.setInt(1, empno);
      ResultSet rs = pst.executeQuery();
      if (rs.next()) {
        System.out.println("Employ Number " +rs.getInt("empno"));
        System.out.println("Employ Name " +rs.getString("name"));
        System.out.println("Gender " +rs.getString("gender"));
        System.out.println("Department " +rs.getString("dept"));
        System.out.println("Designation  " +rs.getString("desig"));
        System.out.println("Basic " +rs.getDouble("basic"));
        System.out.println("----------------------------");
      } else {
        System.out.println("No such employ number");
      }
    } catch (ClassNotFoundException e) {
      throw new RuntimeException(e);
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}
