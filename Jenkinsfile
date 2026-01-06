pipeline {
    agent any

    environment {
        CI = 'false'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

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
                sh '''
                  pm2 startOrRestart $WORKSPACE/ecosystem.config.js
                  pm2 save
                  pm2 list
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Application successfully deployed.'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
