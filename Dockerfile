# Estágio 1: builder
FROM node:22-alpine AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm ci

# Copiar o restante dos arquivos do projeto
COPY . .

# Estágio 2: runtime
FROM node:22-alpine

# Define o ambiente como produção
ENV NODE_ENV=production

# Definir o diretório de trabalho
WORKDIR /app

# Cria um usuário não root para rodar o bot
USER node

# Copiar os arquivos do estágio builder
COPY --from=builder /app .

# Expor a porta que o bot irá usar (opcional, dependendo do seu bot)
# EXPOSE 3000

# Comando para iniciar o bot
CMD ["npm", "start"]