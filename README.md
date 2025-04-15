# Dev.KeatonRProud.com

Personal website deployed to GitHub Pages.

## Development

```bash
# Start development server
npm run dev
```

## Deployment to GitHub Pages

1. Build and export the site:
   ```bash
   npm run predeploy
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## GitHub Pages Setup

- Custom domain: dev.keatonrproud.com
- CNAME file is automatically included in the build

## Adding a custom domain to GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to Pages section
3. Under "Custom domain" enter: dev.keatonrproud.com
4. Check "Enforce HTTPS" once DNS propagation is complete

## DNS Configuration

Add these records to your DNS configuration for your domain:

- A record: @ → 185.199.108.153
- A record: @ → 185.199.109.153
- A record: @ → 185.199.110.153
- A record: @ → 185.199.111.153
- CNAME record: dev → keatonrproud.github.io. 