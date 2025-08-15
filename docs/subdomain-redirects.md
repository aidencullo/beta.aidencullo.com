# Subdomain Redirects for GitHub Pages Custom Domains

You can use URL redirects at your DNS provider or a service like Cloudflare to redirect additional subdomains to your primary GitHub Pages custom domain. This allows multiple subdomains to point to the same content, but they will effectively resolve to the single, configured custom domain.

## Implementation Methods

### 1. DNS Provider Redirects
Most domain registrars and DNS hosts offer URL forwarding/redirect services to their customers. This is typically done through:
- URL Forwarding rules
- 301/302 redirects
- CNAME records pointing to your main domain

### 2. Cloudflare Page Rules
If using Cloudflare, you can configure Page Rules to redirect your subdomains to your primary GitHub Pages domain.

### 3. HTML Meta Redirects
Create additional GitHub Pages repositories for subdomains with HTML redirect files:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting to https://yourdomain.com</title>
    <meta http-equiv="refresh" content="0; URL=https://yourdomain.com">
  </head>
  <link rel="canonical" href="https://yourdomain.com">
</html>
```

## Important Notes

- GitHub Pages CNAME files can only contain one domain
- Multiple subdomains require redirects set up at the DNS level
- This approach maintains SEO benefits while providing multiple access points
- All subdomains will effectively resolve to your single configured custom domain


