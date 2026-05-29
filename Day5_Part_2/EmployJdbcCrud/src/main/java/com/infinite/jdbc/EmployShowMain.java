package com.infinite.jdbc;

import java.sql.*;

public class EmployShowMain {
  public static void main(String[] args) {
    try {
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection connection = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/infinite26","root",
        "root"
      );
      System.out.println("Connected to database successfully");
      String cmd = "select * from Employ";
      PreparedStatement preparedStatement = connection.prepareStatement(cmd);
      ResultSet rs = preparedStatement.executeQuery();
      while (rs.next()) {
        System.out.println("Employ Number " +rs.getInt("empno"));
        System.out.println("Employ Name " +rs.getString("name"));
        System.out.println("Gender " +rs.getString("gender"));
        System.out.println("Department " +rs.getString("dept"));
        System.out.println("Designation  " +rs.getString("desig"));
        System.out.println("Basic " +rs.getDouble("basic"));
        System.out.println("----------------------------");
      }
    } catch (ClassNotFoundException e) {
      throw new RuntimeException(e);
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}
