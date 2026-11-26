pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh 'docker build -t cicd-app .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f cicd-app || true'
                sh 'docker run -d --name cicd-app -p 3001:80 cicd-app'
            }
        }
    }
}