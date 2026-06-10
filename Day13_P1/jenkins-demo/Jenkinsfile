pipeline {
    agent any

    tools {
        jdk 'Java17'
        maven 'Maven3'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
            		url: 'https://github.com/prasannatrainer80/jenkins-demo'
            }
        }

        stage('Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                bat 'mvn test'
            }
        }

        stage('Run') {
            steps {
                bat 'java -jar target/jenkins-demo-0.0.1-SNAPSHOT.jar'
            }
        }
    }
}