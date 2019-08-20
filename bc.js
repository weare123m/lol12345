const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on("message", message => {

            if (message.content.startsWith(prefix + "send")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : 🧧عدد الاعضاء المستلمين`);
 message.delete();
};
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Script by : Salah Xserver`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Salah Xserver ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-send | broadcaster`,"http://twitch.tv/test-broadcast")
client.user.setStatus("dnd")
});



client.login("NjExOTMzNTA2NzQxODYyNDkx.XVwqvg.WZR_FgtliYPNQNxb4dHvxhc-j8A");
