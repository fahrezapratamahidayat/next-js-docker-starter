#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/nextjs-app-$DATE"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup Kubernetes manifests
cp -r k8s/ $BACKUP_DIR/

# Backup Docker images
docker save your-registry/your-repo:latest > $BACKUP_DIR/nextjs-app-image.tar

# Backup persistent volumes (if any)
kubectl get pv -o yaml > $BACKUP_DIR/persistent-volumes.yaml

echo "✅ Backup completed: $BACKUP_DIR"
