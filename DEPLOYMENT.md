# Royal Hermitage - Deployment Guide

This guide covers the deployment process and domain setup for the Royal Hermitage luxury real estate website.

## Domain Setup

1. **Domain Registration**
   - Register domain at a registrar of your choice (e.g., GoDaddy, Namecheap)
   - Choose one of these DNS configuration options:

     Option 1 - Using Vercel Nameservers (Recommended):
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```

     Option 2 - Using Custom DNS Records:
     ```
     A     @     -> 76.76.21.21
     CNAME www   -> cname.vercel-dns.com
     ```

2. **Vercel Domain Configuration**
   - Go to Vercel project dashboard
   - Navigate to Settings > Domains
   - Click "Add Domain"
   - Enter your domain name
   - Follow Vercel's verification process
   - Wait for DNS propagation (can take up to 48 hours)

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Verify HTTPS is working after DNS propagation
   - SSL renewal is automatic

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

1. **Build and Deploy**
   - Push changes to your GitHub repository
   - Vercel automatically builds and deploys
   - Check deployment status in Vercel dashboard

2. **Verify Deployment**
   - Check your custom domain (e.g., https://royalhermitage.com)
   - Verify all routes work correctly
   - Test contact form submission
   - Validate SSL certificate

## Post-Deployment

1. **Monitoring**
   - Use Vercel Analytics for performance monitoring
   - Set up custom uptime monitoring if needed
   - Monitor deployment status in Vercel dashboard

2. **Maintenance**
   - SSL certificates are auto-renewed by Vercel
   - Regular code updates via Git
   - Monitor Vercel deployment logs

## Troubleshooting

Common issues and solutions:

1. **Domain Not Connecting**
   - Verify DNS records are correct
   - Check DNS propagation using a tool like whatsmydns.net
   - Ensure Vercel domain verification is complete

2. **SSL Issues**
   - Wait for DNS propagation
   - Check Vercel SSL certificate status
   - Verify HTTPS redirection

3. **Performance Issues**
   - Check Vercel Analytics
   - Monitor serverless function usage
   - Review deployment build logs

## Support

For deployment assistance:
- Email: support@royalhermitage.com
- Technical Support: (800) ROYAL-HM
- Vercel Support: https://vercel.com/support