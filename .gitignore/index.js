const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on("ready", () => {
    console.log('Bot ON')
    bot.user.setActivity(" | by $ad ", { type: "STREAMING", url: "https://www.twitch.tv/hya" });
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = "-";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === prefix + "mpall") {
        
        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Précise un message bb :heart: ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
    }

});

bot.login("NjQ1NzAxNDg4MDg5NDk3NjMy.XdGafA.q43V_RM1M5H3E4IfzDFuBIfss-A")
