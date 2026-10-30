import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { Markup } from 'telegraf';
import { inlineKeyboard } from 'telegraf/markup';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// comando /start
bot.start((ctx) => ctx.reply('Oii! Eu sou o bot de gatinhos! Clique no botão abaixo para receber uma foto de gatinho ou mande /gatinho.', Markup.inlineKeyboard([
  Markup.button.callback('Gatinho!!', 'get_cat'),
])));

// comando /help
bot.help((ctx) => ctx.reply('Comandos disponíveis:\n/gatinho - Receba uma foto de gatinho.'));
// resposta a mensagens de texto
// bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// comando de foto de gatinho
bot.command('gatinho', async (ctx) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    await ctx.replyWithPhoto(data[0].url);
  } catch (error) {
    console.error('Error fetching cat image:', error);
    ctx.reply('An error occurred while fetching a cat image. Please try again later.');
  }
});

bot.action('get_cat', async (ctx) => {
  ctx.answerCbQuery();
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    await ctx.replyWithPhoto(data[0].url);
  } catch (error) {
    console.error('Error fetching cat image:', error);
    ctx.reply('An error occurred while fetching a cat image. Please try again later.');
  }
});

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