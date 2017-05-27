const request = require('request');

exports.run = (message, bot) => {
  var r = request.get('http://thecatapi.com/api/images/get.php/gif.php?type=gif', function(err, res, body) {
     if (err) {
      message.channel.sendMessage("Service Offline");
      return;
     }
     message.channel.sendFile(r.uri.href);
    });
}

exports.conf = {
  userPerm:[],
  botPerm:["SEND_MESSAGES"],
  coolDown:0,
  dm:true,
  category:"Random",
  help:"Cats!!",
  args:"",
}