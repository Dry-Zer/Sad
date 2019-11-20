const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "*"

client.on('message', message => {

  if (message.content.startsWith(prefix + 'mpall')){
    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);

                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(MpMessage)
    })
 }
});

client.once('ready', () => {
    console.log(`${client.user.tag} est connecté`)
    client.user.setActivity('𝘓𝘈 𝘝𝘐𝘌 𝘘𝘜𝘖𝘕 𝘔𝘌𝘕𝘌', {type: "PLAYING"})
})

client.on('message', message => {
	if (message.content === '*ping') {
		message.channel.send('Pong.');
	}
});

client.on('message', msg => {
    if (msg.content === '*insulte') {
      msg.reply('NIKE ZEBI');
    }
  });

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find('name', '?????????????????');
    if (!channel) return;
    channel.send(`Bienvenue sur le serveur ${member}, tu peux inviter des gens, pour recevoir ta récompense !`);
    }
    );

    client.on('message', function(message) {
        if (message.content == "*clear") {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.fetchMessages()
                   .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
            }
        }
    });

client.login('NjQ1NzAxNDg4MDg5NDk3NjMy.XdGafA.q43V_RM1M5H3E4IfzDFuBIfss-A')
