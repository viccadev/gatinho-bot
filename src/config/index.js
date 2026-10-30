import dotenv from 'dotenv';

dotenv.config();

// validar o token do bot se o token foi configurado e se é uma string não vazia

const env = process.env

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

botToken(env.BOT_TOKEN);

if (env.BOT_TOKEN) {
  console.log('BOT_TOKEN is defined. Proceeding with bot setup...');
}

// Validar o ID do grupo se o ID do grupo foi configurado e se é um número inteiro válido

const groupId = (id) => {
  if (id && !/^-\d+$/.test(id)) {
    console.error('Error: GROUP_ID format is invalid. It should be a negative integer.');
    process.exit(1);
  } else if (id && isNaN(parseInt(id, 10))) {
    console.error('Error: GROUP_ID is invalid. It must be a valid integer.');
    process.exit(1);
  }
};

groupId(env.GROUP_ID);

if (env.GROUP_ID) {
  console.log('GROUP_ID is defined. Proceeding with group setup...');
}

// Validar o ID do thread da mensagem se o ID do thread da mensagem foi configurado e se é um número inteiro válido

const messageThreadId = (id) => {
  if (id && !/^\d+$/.test(id)) {
    console.error('Error: MESSAGE_THREAD_ID format is invalid. It should be a positive integer.');
    process.exit(1);
  } else if (id && isNaN(parseInt(id, 10))) {
    console.error('Error: MESSAGE_THREAD_ID is invalid. It must be a valid integer.');
    process.exit(1);
  }
};

messageThreadId(env.MESSAGE_THREAD_ID);

if (env.MESSAGE_THREAD_ID) {
  console.log('MESSAGE_THREAD_ID is defined. Proceeding with message thread setup...');
}

function getBotToken() {
  return env.BOT_TOKEN;
}

function getGroupID() {
  return env.GROUP_ID;
}

function getThreadID() {
  return env.MESSAGE_THREAD_ID;
}

export { getBotToken, getGroupID, getThreadID }