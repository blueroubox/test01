const TeleBot = require('../');
const bot = new TeleBot('1260288897:AAFhSVaMOgRBaPP0tHwsHBHlO2AF5KisVKI');

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();
