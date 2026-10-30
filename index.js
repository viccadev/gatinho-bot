// import dotenv from 'dotenv';
// import { getBotToken } from './scr/config/index.js';
// import { Telegraf } from 'telegraf';
// import { Markup } from 'telegraf';
// import { getCatImage } from './scr/services/catService.js';

// dotenv.config();

// const bot = new Telegraf(getBotToken());

// // comando /start
// bot.start((ctx) => ctx.reply('Oii! Eu sou o bot de gatinhos! Clique no botão abaixo para receber uma foto de gatinho ou mande /gatinho.', Markup.inlineKeyboard([
//   Markup.button.callback('Gatinho!!', 'get_cat'),
// ])));

// // comando /help
// bot.help((ctx) => ctx.reply('Comandos disponíveis:\n/gatinho - Receba uma foto de gatinho.'));
// // resposta a mensagens de texto
// // bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// // comando de foto de gatinho
// bot.command('gatinho', async (ctx) => {
//   try {
//     const catImage = await getCatImage();
//     await ctx.replyWithPhoto(catImage);
//   } catch (error) {
//     console.error('Error fetching cat image:', error);
//     ctx.reply('An error occurred while fetching a cat image. Please try again later.');
//   }
// });

// bot.action('get_cat', async (ctx) => {
//   ctx.answerCbQuery();
//   try {
//     const catImage = await getCatImage();
//     await ctx.replyWithPhoto(catImage);
//   } catch (error) {
//     console.error('Error fetching cat image:', error);
//     ctx.reply('An error occurred while fetching a cat image. Please try again later.');
//   }
// });

import bot from './scr/bot.js';

console.log('Bot is set up. Ready to launch.');

try {
  bot.launch();
  console.log('Bot is running...');
} catch (err) {
  console.error('Failed to launch the bot:', err);
}

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));