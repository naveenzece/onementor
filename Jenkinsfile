pipeline {
    agent any

    environment {
        CI = 'true'
        NODE_ENV = 'production'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                sh 'git clean -fd'
            }
        }

        // Install only UI dependencies (API folder is not a Node project)
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
                script {
                    echo "Installing PM2..."
                    sh 'npm install -g pm2 --unsafe-perm=true'

                    echo "Stopping old PM2 processes..."
                    sh 'pm2 delete onementor-api onementor-ui || true'

                    echo "Starting applications with PM2..."
                    sh 'pm2 startOrReload ecosystem.config.js --update-env'

                    echo "Saving PM2 process list..."
                    sh 'pm2 save'

                    echo "Configuring PM2 startup..."
                    sh 'pm2 startup | tail -1 | sudo bash || true'
                }
            }
        }

        stage('Configure Nginx') {
            steps {
                script {
                    echo "Copying Nginx config..."
                    sh 'sudo cp nginx/onementor.conf /etc/nginx/sites-available/onementor.conf'

                    echo "Enabling site..."
                    sh 'sudo ln -sf /etc/nginx/sites-available/onementor.conf /etc/nginx/sites-enabled/onementor.conf'

                    echo "Testing Nginx config..."
                    sh 'sudo nginx -t'

                    echo "Reloading Nginx..."
                    sh 'sudo systemctl reload nginx'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
            echo 'UI built and deployed'
            echo 'PM2 and Nginx configured successfully'
        }
        failure {
            echo '❌ Deployment failed. Check logs above.'
        }
        always {
            echo 'Build completed.'
        }
    }
}
