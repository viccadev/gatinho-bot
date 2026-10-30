import { Telegraf } from 'telegraf';
import { getBotToken } from './config/index.js';
import { commandsHandler } from './commands/catCommands.js';

const bot = new Telegraf(getBotToken());

commandsHandler(bot, 'start');
commandsHandler(bot, 'help');
commandsHandler(bot, 'gatinho');
commandsHandler(bot, 'get_cat');

export default bot;