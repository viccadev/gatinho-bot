import { Telegraf } from 'telegraf';
import { botToken } from './config/index.js';
import { commandsHandler } from './commands/catCommands.js';

const bot = new Telegraf(botToken());

bot.use((ctx, next) => {
    console.log('--- NOVA ATUALIZAÇÃO RECEBIDA ---');
    console.log('Chat ID:', ctx.chat?.id);
    console.log('Tipo do Chat:', ctx.chat?.type); // 'private', 'group', 'supergroup'
    
    // O message_thread_id existe apenas se a mensagem vier de um tópico
    const threadId = ctx.message?.message_thread_id || ctx.callbackQuery?.message?.message_thread_id;
    console.log('Message Thread ID (Tópico):', threadId);
    
    // Loga o texto da mensagem (se houver)
    if (ctx.message?.text) console.log('Texto:', ctx.message.text);
    console.log('---------------------------------');

    return next(); // Passa a bola para o próximo handler
});

commandsHandler(bot, 'start');
commandsHandler(bot, 'help');
commandsHandler(bot, 'gatinho');
commandsHandler(bot, 'get_cat');

export default bot;