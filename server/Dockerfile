FROM node:20.12.1-alpine3.18

WORKDIR /app

# Instalar dependencias (node_modules)
COPY package*.json .
RUN npm install

# Copiar schema.prisma y generar cliente prisma
COPY prisma ./prisma
RUN npm run generate

COPY . .

EXPOSE 8086

CMD ["npm", "run", "dev"]
