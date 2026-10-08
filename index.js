const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot đang chạy 24/7!'));
app.listen(PORT, () => console.log(`Server đang chạy trên cổng ${PORT}`));

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once('ready', () => {
    console.log(`Đã đăng nhập thành công: ${client.user.tag}`);

    const guildId = '1476132650099015702/';
    const channelId = '1476132651235676254';

    const guild = client.guilds.cache.get(guildId);
    if (guild) {
        joinVoiceChannel({
            channelId: channelId,
            guildId: guildId,
            adapterCreator: guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: true
        });
        console.log('Đã vào phòng voice thành công!');
    }
});

client.login('MTU1NzgwMzAxMDI1NDU2OTU3Mw.GKXFQM.Wn7x9GoKSEzTXcrrFcfJDjM4C1Zi_DUrNylJaA');
