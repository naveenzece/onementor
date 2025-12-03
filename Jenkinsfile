pipeline {
    agent any
    
    environment {
        AWS_REGION = 'ap-south-2'  // Update with your AWS region
        AWS_ACCOUNT_ID = '910655918757'  // Update with your AWS account ID
        ECR_REPOSITORY = 'onementor-ui'
        EKS_CLUSTER_NAME = 'onementor-cluster1'  // Update with your EKS cluster name
        KUBECTL_VERSION = '1.34.2'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        DOCKER_IMAGE = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}"
        LATEST_IMAGE = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:latest"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh '''
                        docker build -f ui/Dockerfile \
    -t 910655918757.dkr.ecr.ap-south-2.amazonaws.com/onementor-ui:${BUILD_NUMBER} \
    -t 910655918757.dkr.ecr.ap-south-2.amazonaws.com/onementor-ui:latest \
    ui/

                    '''
                }
            }
        }
        
        stage('Login to Amazon ECR') {
            steps {
                script {
                    echo 'Logging in to Amazon ECR...'
                    sh '''
                        aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                    '''
                }
            }
        }
        
        stage('Create ECR Repository') {
            steps {
                script {
                    echo 'Creating ECR repository if it does not exist...'
                    sh '''
                        aws ecr describe-repositories --repository-names ${ECR_REPOSITORY} --region ${AWS_REGION} || \
                        aws ecr create-repository --repository-name ${ECR_REPOSITORY} --region ${AWS_REGION}
                    '''
                }
            }
        }
        
        stage('Push Docker Image to ECR') {
            steps {
                script {
                    echo 'Pushing Docker image to ECR...'
                    sh '''
                        docker push ${DOCKER_IMAGE}
                        docker push ${LATEST_IMAGE}
                    '''
                }
            }
        }
        
        stage('Configure kubectl') {
            steps {
                script {
                    echo 'Installing kubectl...'
                    sh '''
                        curl -LO "https://dl.k8s.io/release/v${KUBECTL_VERSION}/bin/linux/amd64/kubectl"
                        chmod +x kubectl
                        sudo mv kubectl /usr/local/bin/
                    '''
                }
            }
        }
        
        stage('Configure AWS EKS') {
            steps {
                script {
                    echo 'Configuring kubectl for EKS cluster...'
                    sh '''
                        aws eks update-kubeconfig --name ${EKS_CLUSTER_NAME} --region ${AWS_REGION}
                    '''
                }
            }
        }
        
        stage('Update Kubernetes Deployment') {
            steps {
                script {
                    echo 'Updating Kubernetes deployment with new image...'
                    sh '''
                        # Update deployment.yaml with new image
                        sed -i "s|image:.*|image: ${DOCKER_IMAGE}|g" k8s/deployment.yaml
                        
                        # Apply Kubernetes manifests
                        kubectl apply -f k8s/namespace.yaml
                        kubectl apply -f k8s/configmap.yaml
                        kubectl apply -f k8s/deployment.yaml
                        kubectl apply -f k8s/service.yaml
                        
                        # Apply ingress only if certificate ARN is set
                        if [ -f k8s/ingress.yaml ]; then
                            kubectl apply -f k8s/ingress.yaml || echo "Ingress not applied (certificate may not be configured)"
                        fi
                    '''
                }
            }
        }
        
        stage('Rollout Status') {
            steps {
                script {
                    echo 'Waiting for deployment rollout to complete...'
                    sh '''
                        kubectl rollout status deployment/onementor-ui -n onementor --timeout=5m
                    '''
                }
            }
        }
        
        stage('Verify Deployment') {
            steps {
                script {
                    echo 'Verifying deployment...'
                    sh '''
                        kubectl get pods -n onementor
                        kubectl get svc -n onementor
                        kubectl get ingress -n onementor || echo "Ingress not configured"
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
            // You can add notifications here (email, Slack, etc.)
        }
        failure {
            echo 'Deployment failed!'
            // You can add rollback logic here
            sh '''
                kubectl rollout undo deployment/onementor-ui -n onementor || true
            '''
        }
        always {
            echo 'Cleaning up...'
            sh '''
                docker image prune -f || true
            '''
        }
    }
}
