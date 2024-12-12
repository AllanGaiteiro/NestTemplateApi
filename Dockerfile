# Usar a imagem base do Node.js
FROM node:18-alpine

# Configurar diretório de trabalho
WORKDIR /app

# Instalar dependências globais mínimas (opcional, pode instalar no exec)
RUN npm install

# Expor a porta onde o app será executado
EXPOSE 3000

# Definir comando padrão
CMD ["sh", "-c", "npx typeorm migration:run && npm run start:dev"]
