let readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const Command = require("./utilities/app.js")

function chat() {
	rl.question('masukan pesan anda:\n', (pesan) {

	new app(pesan);
	chat();
	});
}
chat();