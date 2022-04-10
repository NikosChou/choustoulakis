# # production stage
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# copy from build image
COPY /dist /usr/share/nginx/html

EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]