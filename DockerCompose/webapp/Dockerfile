FROM node:11-alpine
ENV PORT 3000
ENV HOST '0.0.0.0'
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "/app/index.js"]
