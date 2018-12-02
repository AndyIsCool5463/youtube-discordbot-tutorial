const Discord = require("discord.js");
const token = require("./token.json");
const client = new Discord.Client();
client.login(token.token);

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("guildMemberAdd", member => {
  console.log(`The member: ${member.displayName} has joined the guild!`);
  var w = client.channels.find(c => c.type == "text" && c.name == "general");
  w.send(`${member.displayName} has joined the guild!`);
});
client.on("message", message => {
  // If the message is "ping"
  console.log(message);
  if (message.content === "ping") {
    // Send "pong" to the same channel
    var nTime = new Date.now();
    console.log(`${nTime}:DateNow`);
    message.channel.send("pong").then(m => {
      var r = m.createdTimestamp();
      message.channel.send(nTime - r);
    });
  } else if (message.content === "emit") {
    client.emit("guildMemberAdd", "Botnetter");
  }
});
