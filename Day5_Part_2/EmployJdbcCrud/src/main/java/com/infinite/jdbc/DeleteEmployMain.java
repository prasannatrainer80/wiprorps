package com.infinite.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class DeleteEmployMain {
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
      String cmd = "Delete From Employ Where empno = ?";
      PreparedStatement pst = connection.prepareStatement(cmd);
      pst.setInt(1, empno);
      pst.execute();
      System.out.println("Employee Deleted Successfully");
    } catch (ClassNotFoundException e) {
      throw new RuntimeException(e);
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}
