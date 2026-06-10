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
                    url: 'https://github.com/prasannatrainer80/jendoc-demo'
            }
        }

        stage('Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t jendoc-demo .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f jendoc-container 2>NUL'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d --name jendoc-container -p 1113:1113 jendoc-demo'
            }
        }
    }
}