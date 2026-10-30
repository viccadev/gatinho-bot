import dotenv from 'dotenv';

dotenv.config();

// validar o token do bot
if (!process.env.BOT_TOKEN) {
  console.error('Error: BOT_TOKEN is not defined in the environment variables.');
  process.exit(1);
} else {
  console.log('BOT_TOKEN is defined. Proceeding with bot setup...');
}

export default {
  botToken: process.env.BOT_TOKEN,
};

