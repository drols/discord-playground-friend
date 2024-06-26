require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`👋 ${c.user.tag} is online.`);
});


//Turtorial Here: https://www.youtube.com/watch?v=2CsSJshmadg //
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // console.log(interaction.commandName);

    if (interaction.commandName === 'hey') {
        interaction.reply('hey');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong');
    }
});

client.login(process.env.TOKEN);

















//Tutorial Here: https://youtu.be/KZ3tIGHU314?si=2QKGr0voHvvSMcDO //

// client.on('messageCreate', (message) => {
//     if (message.author.bot) {
//         return;
//     }

//     if (message.content === 'hello') {
//     console.log(message.content)
//     };
// });


// Ignore Bot messages in guild. Reply directly to "hello" messages.
// client.on('messageCreate', (message) => {
//     if (message.author.bot) {
//         return;
//     }

//     if (message.content === 'hello') {
//         message.reply('hello');
//     }
// });



