# Royal Hermitage - Deployment Guide

This guide covers the deployment process and domain setup for the Royal Hermitage luxury real estate website.

## Domain Setup

1. **Domain Registration**
   - Register domain at a registrar of your choice (e.g., GoDaddy, Namecheap)
   - Set up DNS records:
     ```
     A     @     -> [Your hosting IP]
     CNAME www   -> @
     CNAME api   -> @
     CNAME cdn   -> @
     ```

2. **SSL Certificate**
   - Install SSL certificate through hosting provider
   - Enable HTTPS redirection in Nginx config
   - Verify SSL configuration using SSL checker tools

## Hosting Setup

1. **Server Requirements**
   - Node.js 18+ for build process
   - Nginx web server
   - 512MB RAM minimum
   - 10GB storage minimum

2. **Initial Server Setup**
   ```bash
   # Create application directory
   mkdir -p /var/www/royal-hermitage
   
   # Set up proper permissions
   chown -R www-data:www-data /var/www/royal-hermitage
   chmod -R 755 /var/www/royal-hermitage
   ```

3. **Nginx Configuration**
   - Copy nginx.conf to /etc/nginx/sites-available/royal-hermitage
   - Create symlink to sites-enabled
   - Test and reload Nginx configuration

## Deployment Process

1. **Build Application**
   ```bash
   # Install dependencies
   npm install
   
   # Create production build
   npm run build:prod
   ```

2. **Deploy Files**
   ```bash
   # Using provided deploy script
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Verify Deployment**
   - Check https://royalhermitage.com
   - Verify all routes work correctly
   - Test contact form submission
   - Validate SSL certificate

## Post-Deployment

1. **Monitoring**
   - Set up uptime monitoring
   - Configure error logging
   - Monitor server resources

2. **Maintenance**
   - Regular SSL certificate renewal
   - Weekly server updates
   - Daily backups of site content

## Troubleshooting

Common issues and solutions:

1. **404 Errors on Routes**
   - Verify Nginx configuration for SPA routing
   - Check file permissions

2. **SSL Issues**
   - Verify SSL certificate installation
   - Check SSL configuration in Nginx
   - Validate DNS propagation

3. **Performance Issues**
   - Check server resources
   - Verify Nginx caching configuration
   - Monitor application logs

## Support

For deployment assistance:
- Email: support@royalhermitage.com
- Technical Support: (800) ROYAL-HM