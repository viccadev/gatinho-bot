import dotenv from 'dotenv';

dotenv.config();

// validar o token do bot se o token foi configurado e se é uma string não vazia

const env = process.env
const botToken = env.BOT_TOKEN
const groupId = env.GROUP_ID
const threadId = env.MESSAGE_THREAD_ID

function verificaBotToken(token) {
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

verificaBotToken(botToken);

if (botToken) {
  console.log('BOT_TOKEN is defined. Proceeding with bot setup...');
}

// Validar o ID do grupo se o ID do grupo foi configurado e se é um número inteiro válido

function verificaGroupId(id) {
  if (id && !/^-\d+$/.test(id)) {
    console.error('Error: GROUP_ID format is invalid. It should be a negative integer.');
    process.exit(1);
  } else if (id && isNaN(parseInt(id, 10))) {
    console.error('Error: GROUP_ID is invalid. It must be a valid integer.');
    process.exit(1);
  }
};

verificaGroupId(groupId);

if (groupId) {
  console.log('GROUP_ID is defined. Proceeding with group setup...');
}

// Validar o ID do thread da mensagem se o ID do thread da mensagem foi configurado e se é um número inteiro válido

function verificaThreadId(id) {
  if (id && !/^\d+$/.test(id)) {
    console.error('Error: MESSAGE_THREAD_ID format is invalid. It should be a positive integer.');
    process.exit(1);
  } else if (id && isNaN(parseInt(id, 10))) {
    console.error('Error: MESSAGE_THREAD_ID is invalid. It must be a valid integer.');
    process.exit(1);
  }
};

verificaThreadId(threadId);

if (threadId) {
  console.log('MESSAGE_THREAD_ID is defined. Proceeding with message thread setup...');
}

export { botToken, groupId, threadId }