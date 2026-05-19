FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=optional

COPY . .
RUN npx ng build --configuration production

FROM nginx:1.25-alpine AS production

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/idl-app/browser /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

RUN rm -f /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
