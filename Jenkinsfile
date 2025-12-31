pipeline {
    agent any

    environment {
        CI = 'false'
    }

    stages {
        stage('Install UI Dependencies') {
            steps {
                dir('ui') {
                    sh 'npm install'
                }
            }
        }

        stage('Build UI') {
            steps {
                dir('ui') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 startOrReload ecosystem.config.js'
                sh 'pm2 save'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
