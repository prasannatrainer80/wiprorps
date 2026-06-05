FROM eclipse-temurin:8-jdk
COPY . /var/www/java
WORKDIR /var/www/java
RUN javac Program1.java Program2.java Program3.java
CMD sh -c "java Program1 && java Program2 && java Program3"