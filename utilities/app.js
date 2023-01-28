const fs = require("fs");
classs app {
	#command = "Test";
	#option = "ping";
	#data = [];
	constuctor(pesan){
		this.#command = pesan[0];
		pesan.shift();
		this.#option = pesan[0];
		pesan.shift();
		if (pesan.length > 0){
			this.#data = pesan;
		}
		if (fs,existsSync("./command/" + this.#command + ".js")){
			this.#command = require("../commands/" + ",js)";
				this.#command = new this.#command():
		}
	}
}

module.export = app;