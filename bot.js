var express = require('express')
var app = express()
var request=require('request');
var tempUser="tenuzholic";
var Discord = require('discord.js');
var cheerio = require('cheerio');

var bot = new Discord.Client();

bot.on('ready', (message) => {
	
	app.get('/', function(req, res) {
		var username = req.query.username;
		var msg = req.query.msg;
		console.log('send msg'+msg)
		//console.log('ready!')
		if (tempUser!=msg) {
				
				bot.users.get('309003371531075594').send('```'+'\n'+'VENDOR'+'\n'+msg+'```')
			
		}
		tempUser=msg;
		res.send('Hello World')	
	})
});


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
