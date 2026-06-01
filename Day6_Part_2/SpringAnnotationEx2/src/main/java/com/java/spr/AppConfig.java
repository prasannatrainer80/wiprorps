package com.java.spr;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.java.spr")
public class AppConfig {

  @Bean
  public JobDetails jobBangalore() {
    return new JobDetails("Software Engineer","Wipro","Bangalore");
  }

  @Bean
  public JobDetails jobHyderabad() {
    return new JobDetails("Software Engineer","Wipro","Hyderabad");
  }

  @Bean
  public Person personSunil() {
    return new Person(
      1,
      "Sunil",
      jobBangalore(),   // SAME bean reused
      new Family("Kakinada", "AP")
    );
  }

  @Bean
  public Person personVarsha() {
    return new Person(
      2,
      "Varsha",
      jobHyderabad(),   // SAME bean reused
      new Family("Chennai", "TN")
    );
  }

  @Bean
  public Person personGokul() {
    return new Person(
      3,
      "Gokul",
      jobBangalore(),   // SAME bean reused
      new Family("Swamimalai", "TN")
    );
  }

  @Bean
  public Person personSakshi() {
    return new Person(
      4,
      "Sakshi",
      jobHyderabad(),   // SAME bean reused
      new Family("Delhi", "Delhi")
    );
  }


}
