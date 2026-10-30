import dotenv from 'dotenv';

dotenv.config();

// validar o token do bot se o token foi configurado e se é uma string não vazia

const botToken = (token) => {
  if (!token) {
    console.error('Error: BOT_TOKEN is not defined in the environment variables.');
    process.exit(1);
  } else if (typeof token !== 'string' || token.trim() === '') {
    console.error('Error: BOT_TOKEN is invalid. It must be a non-empty string.');
    process.exit(1);
  } else if (!/^(\d+):[A-Za-z0-9_-]+$/.test(token)) {
    console.error('Error: BOT_TOKEN format is invalid. It should be in the format <bot_id>:<bot_token>.');
    process.exit(1);
  }
};

botToken(process.env.BOT_TOKEN);

if (!process.env.BOT_TOKEN) {
  console.log('BOT_TOKEN is defined. Proceeding with bot setup...');
}

export function getBotToken() {
  return process.env.BOT_TOKEN;
}