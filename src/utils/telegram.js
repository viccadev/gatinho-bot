import { getGroupID, getThreadID } from "../config/index.js";


// Função para o bot enviar mensagens de texto

async function replyWithText(ctx, text, options = {}) {
    const groupId = getGroupID()
    const threadId = getThreadID()
    // Caso esteja em um grupo:
    if (groupId) {
        const extra = { ...options };

        if (threadId) {
            extra.message_thread_id = parseInt(threadId, 10)
        }

        return await ctx.telegram.sendMessage(parseInt(groupId, 10), text, extra);
    }

    return await ctx.reply(text, options);

}

// Função para o bot enviar mensagens com imagem

async function replyWithPhotoSafe(ctx, photoUrl) {
    const groupId = getGroupID()
    const threadId = getThreadID()
    // Caso grupo:
    if (groupId) {
        console.log('é grupo!')
        const extra = {};

        if (threadId) {
            console.log('tem tópicos!')
            extra.message_thread_id = parseInt(threadId, 10)
        }

        return await ctx.telegram.sendPhoto(parseInt(groupId, 10), photoUrl, extra);
    }

    return await ctx.replyWithPhoto(photoUrl);
}

export { replyWithText, replyWithPhotoSafe }