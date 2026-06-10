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
                    url: 'https://github.com/prasannatrainer80/jenkub-demo'
            }
        }

        stage('Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t springbootjenkins-demo .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f springbootjenkins-container 2>NUL'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d --name springbootjenkins-container -p 2222:2222 springbootjenkins-demo'
            }
        }
        
        stage('Deploy Kubernates') {
			steps {
				bat 'kubectl apply -f deployment.yaml'
				bat 'kubectl apply -f service.yaml'
			}
		}
    }
}