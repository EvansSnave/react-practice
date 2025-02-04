# Stage 1: Build the React app
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies first for caching
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --prefer-offline --no-audit

# Copy source files and build
COPY . .
RUN npm run build

# Stage 2: Production environment
FROM nginxinc/nginx-unprivileged:1.25-alpine AS production

# Remove default nginx configs
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --chown=nginx:nginx --from=builder /app/build /usr/share/nginx/html

# Add security headers
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf

# Use non-root user from base image
USER nginx

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
