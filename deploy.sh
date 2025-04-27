#!/bin/bash

# Configuration
REMOTE_USER="your-hosting-username"
REMOTE_HOST="your-hosting-server"
REMOTE_PATH="/var/www/royal-hermitage"
DIST_PATH="./dist"

# Build the project
echo "Building project..."
npm run build:prod

# Create necessary directories on remote server
echo "Setting up remote directories..."
ssh $REMOTE_USER@$REMOTE_HOST "mkdir -p $REMOTE_PATH"

# Deploy files
echo "Deploying files..."
rsync -avz --delete $DIST_PATH/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/

# Set permissions
echo "Setting permissions..."
ssh $REMOTE_USER@$REMOTE_HOST "chmod -R 755 $REMOTE_PATH"

# Restart Nginx
echo "Restarting Nginx..."
ssh $REMOTE_USER@$REMOTE_HOST "sudo systemctl restart nginx"

echo "Deployment complete!"