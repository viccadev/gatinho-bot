import bot from './src/bot.js';

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