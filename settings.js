const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Sych
	* Follow https://github.com/sychdev
	* Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.own = ['9', '0']
global.owner = ['1', '5']
global.packname = 'TECHNO'
global.author = 'DEV'
global.botname = 'TECHNO'
global.listprefix = ['+','!']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/sych.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://www.youtube.com/',
	gh: 'https://github.com/',
	gc: 'https://chat.whatsapp.com/R',
	ch: 'https://fi.com',
}

global.limit = {
	free: 999,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 100000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'fitur ini cuma atmin bot yang boleh! yang lainn gakkk bolehh😤',
	admin: 'dan yap, fitur ini buat atmin tercintah yh klo bukan atmin ga bisa ya MEMBER haha😹',
	botAdmin: 'aduhai sialnya gw bukan atmin disini awokwok😞',
	group: 'ini fiturnya buat grup ya syg, kalo ga punya ya bikin lah 🗿',
	private: 'fiturnya cuma boleh di private chat aja anjg😠',
	prem: 'iww sv nomer owner dulu lah biar dikasi premium aseli😹',
	wait: 'kosikk...',
	error: 'kan error gimananihh!',
	done: 'yeyy berhasill'
}

global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
