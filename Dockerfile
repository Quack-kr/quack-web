FROM node:20 AS builder

WORKDIR /app

ENV VITE_CJS_IGNORE_WARNING='true vite dev'
ENV NODE_ENV=production

COPY package.json package-lock.json ./

RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /etc/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
