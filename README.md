# 🐱 Gatinho Bot

Um **bot de Telegram** que envia fotos de gatinhos aleatórias quando acionado. Construído com Node.js e Telegraf.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Telegraf](https://img.shields.io/badge/Telegraf-9B7CFD?style=for-the-badge&logo=telegram&logoColor=white)
![Docker](https://img.shields.io/docker/v/hellcatty/gatinho-bot?label=Docker%20Hub&logo=docker&color=blue)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Funcionalidades

| Comando | Descrição |
|---|---|
| `/start` | Mensagem de boas-vindas com botão inline para receber um gatinho |
| `/help` | Lista os comandos disponíveis |
| `/gatinho` | Envia uma foto aleatória de gatinho |
| `get_cat` (callback) | Envia uma foto aleatória de gatinho via botão inline |

O bot também pode ser configurado para enviar mensagens para um **grupo** e/ou **tópico (thread)** no Telegram.

## 📁 Estrutura do Projeto

```
gatinho-bot/
├── index.js                 # Entry point do bot
├── package.json             # Dados do pacote e scripts
├── .env.example             # Exemplo de variáveis de ambiente
├── Dockerfile               # Configuração Docker (multi-stage)
├── docker-compose.yml       # Orchestração Docker
├── src/
│   ├── bot.js               # Inicialização do Telegraf e middleware
│   ├── config/
│   │   └── index.js         # Carregamento e validação de variáveis de ambiente
│   ├── commands/
│   │   └── catCommands.js   # Handlers de comandos (/start, /help, /gatinho)
│   ├── services/
│   │   └── catService.js    # Fetch de imagens via The Cat API
│   └── utils/
│       └── telegram.js      # Utilitários para envio de mensagens/fotos
└── node_modules/
```

## 🚀 Como rodar

### Pré-requisitos

- Node.js 18+ 
- Docker (opcional, para rodar via container)

### 1. Clone o repositório

```bash
git clone https://github.com/viccadev/gatinho-bot.git
cd gatinho-bot
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` com as seguintes variáveis:

| Variável | Obrigatória | Descrição |
|---|---|---|
| `BOT_TOKEN` | ✅ | Token emitido pelo [@BotFather](https://t.me/BotFather) no Telegram |
| `GROUP_ID` | ❌ | ID do grupo (negativo) para onde o bot enviará mensagens |
| `MESSAGE_THREAD_ID` | ❌ | ID do tópico (thread) dentro do grupo |

> ⚠️ **Segurança**: Nunca commite o arquivo `.env` com seu token real. Ele já está no `.gitignore`.

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o bot

```bash
# Modo produção
npm start

# Modo desenvolvimento (reload automático)
npm run dev
```

## 🐳 Rodando com Docker

### Opção 1: Usando a imagem do Docker Hub (recomendado)

A imagem já está publicada no Docker Hub:

```bash
docker pull hellcatty/gatinho-bot:latest
docker run --env-file .env hellcatty/gatinho-bot:latest
```

### Opção 2: Buildar localmente

```bash
docker-compose up --build
```

Isso construirá a imagem localmente e rodará o container com o nome `gatinho-bot`, reiniciando automaticamente caso o processo seja interrompido.

```bash
# Rodar em segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f
```



## 📡 API utilizada

- [The Cat API](https://api.thecatapi.com/v1/images/search) — retorna URLs de imagens de gatos.

## 🐳 Docker Hub

A imagem Docker está publicada no Docker Hub:

| Repositório | Link |
|---|---|
| `hellcatty/gatinho-bot` | https://hub.docker.com/repository/docker/hellcatty/gatinho-bot/general |

### Tags disponíveis

- `latest` — versão estável mais recente
- `2.2.0` — versão específica

### Build local

Se preferir buildar a imagem manualmente:

```bash
docker build -t hellcatty/gatinho-bot:2.2.0 .
docker push hellcatty/gatinho-bot:2.2.0
```


## 🔧 Variáveis de ambiente detalhadas

| Variável | Formato esperado | Exemplo |
|---|---|---|
| `BOT_TOKEN` | `<id>:<token>` | `123456789:ABCdefGhI1234567890abCdE` |
| `GROUP_ID` | Número inteiro negativo | `-1001234567890` |
| `MESSAGE_THREAD_ID` | Número inteiro positivo | `1` |

## ⚙️ Como criar seu próprio bot

1. Abra o Telegram e procure por **@BotFather**
2. Envie `/newbot` e siga as instruções para criar o token
3. Copie o token para o seu arquivo `.env`
4. (Opcional) Adicione o bot ao grupo desejado e obtenha o ID do grupo (pode usar sites como `userinfobot`)
5. (Opcional) Crie tópicos (threads) no grupo e obtenha seu ID

## 📄 Licença

MIT © [viccadev](https://github.com/viccadev)

---

> Feito com ❤️ para o pessoal que gosta de botões que mandam gatinhos. 🐾
