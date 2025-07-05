#!/bin/bash
# deploy.sh

set -e

echo "🚀 Starting deployment..."

# Apply Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml

# Wait for deployment to be ready
echo "⏳ Waiting for deployment to be ready..."
kubectl rollout status deployment/nextjs-app -n nextjs-app

echo "✅ Deployment completed successfully!"

# Show deployment info
kubectl get pods -n nextjs-app
kubectl get services -n nextjs-app
kubectl get ingress -n nextjs-app
