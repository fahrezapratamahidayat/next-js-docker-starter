#!/bin/bash
# monitor.sh

echo "📊 Monitoring deployment..."

# Check pods status
echo "=== Pods ==="
kubectl get pods -n nextjs-app -o wide

# Check services
echo "=== Services ==="
kubectl get services -n nextjs-app

# Check ingress
echo "=== Ingress ==="
kubectl get ingress -n nextjs-app

# Check resource usage
echo "=== Resource Usage ==="
kubectl top pods -n nextjs-app

# Check logs
echo "=== Recent Logs ==="
kubectl logs -n nextjs-app -l app=nextjs-app --tail=20
