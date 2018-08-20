FROM node:10
WORKDIR /app
RUN npm install -g serve
EXPOSE 80
ADD /build .
CMD serve -p 80 -s .