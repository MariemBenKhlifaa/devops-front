# Étape de construction (build)
FROM node:16.16.0 as build
WORKDIR /app

# Installez Angular CLI globalement
RUN npm install -g @angular/cli

# Copiez d'abord les fichiers de configuration pour améliorer la mise en cache
COPY package*.json ./
RUN npm install

# Copiez le reste des fichiers de l'application et effectuez la construction
COPY . .
RUN ng build

# Étape d'exécution (runtime)
FROM nginx
COPY --from=build /app/dist/sofrecom-project /usr/share/nginx/html
EXPOSE 80

# Aucun besoin de CMD car l'image nginx par défaut exécute déjà nginx
