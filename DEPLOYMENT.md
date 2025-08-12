# Deployment Guide

## Fixed Production Issues

### Changes Made:
1. **Server Configuration**: Updated `server.cjs` to serve built files from `dist/` folder
2. **Build System**: Fixed module system compatibility (ES modules + CommonJS server)
3. **Static File Serving**: Proper SPA support for client-side routing

### For Railway/Render/Heroku Deployment:

1. **Environment Variables**: 
   Set `GEMINI_API_KEY` in your deployment platform

2. **Build Commands**:
   - Build Command: `npm run build`
   - Start Command: `npm run server`

3. **Port Configuration**:
   The server automatically uses `process.env.PORT` (Railway/Heroku standard)

### Key Files Updated:
- `server.cjs` - Production Express server
- `package.json` - Updated scripts and build process
- `dist/` - Built static files (auto-generated)

### Test Locally:
```bash
npm run start  # Builds and starts production server
```

### Common Issues Resolved:
- ✅ 405 Method Not Allowed - Server now properly handles `/api/proxy` 
- ✅ Static file serving - Built React app served from `dist/`
- ✅ Module system conflicts - Server uses `.cjs` extension
- ✅ SPA routing - Catch-all route serves `index.html`

The application should now work correctly in production with the same functionality as the original single-file version.