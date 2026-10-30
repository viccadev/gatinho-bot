import { getCatImage } from '../services/catService.js';
import { Markup } from 'telegraf';

function commandStart(bot) {
    bot.start((ctx) => ctx.reply('Oii! Eu sou o bot de gatinhos! Clique no botão abaixo para receber uma foto de gatinho ou mande /gatinho.', Markup.inlineKeyboard([
        Markup.button.callback('Gatinho!!', 'get_cat'),
    ])));
}

function commandHelp(bot) {
    bot.help((ctx) => ctx.reply('Comandos disponíveis:\n/gatinho - Receba uma foto de gatinho.'));
}

async function commandCat(bot) {
    bot.command('gatinho', async (ctx) => {
        try {
            const catImage = await getCatImage();
            await ctx.replyWithPhoto(catImage);
        } catch (error) {
            console.error('Error fetching cat image:', error);
            ctx.reply('An error occurred while fetching a cat image. Please try again later.');
        }
    });
}

async function commandGetCat(bot) {
    bot.action('get_cat', async (ctx) => {
        ctx.answerCbQuery();
        try {
            const catImage = await getCatImage();
            await ctx.replyWithPhoto(catImage);
        } catch (error) {
            console.error('Error fetching cat image:', error);
            ctx.reply('An error occurred while fetching a cat image. Please try again later.');
        }
    });
}

export async function commandsHandler(bot, command) {
    switch (command) {
        case 'start':
            commandStart(bot);
            break;
        case 'help':
            commandHelp(bot);
            break;
        case 'gatinho':
            await commandCat(bot);
            break;
        case 'get_cat':
            await commandGetCat(bot);
            break;
    }
}