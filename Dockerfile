# Étape 1 : Build
FROM node:18-alpine as builder
WORKDIR /app

# Copier les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code et builder
COPY . .
RUN npm run build   # génère le dossier dist/

# Étape 2 : Serveur Nginx
FROM nginx:alpine
# Copier le build généré
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]