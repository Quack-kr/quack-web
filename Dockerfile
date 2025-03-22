FROM node:16 AS builder
WORKDIR /app
# ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install
# RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
