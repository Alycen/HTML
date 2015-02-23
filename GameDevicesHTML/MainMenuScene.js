function MainMenu () {
	this.playBtn = new Image();
	this.playBtn.src = "assets/gfx/menu/buttonPlay.png";
	this.exitBtn = new Image();
	this.exitBtn.src = "assets/gfx/menu/buttonExit.png";

	this.audioBtn = new Image();
	this.audioBtn.src = "assets/gfx/menu/buttonAudio.png";
	this.audioOn = true;

	this.multiBtn = new Image();
	this.multiBtn.src = "assets/gfx/menu/buttonMulti.png";
	this.multiOn = false;

	this.bg = new Image();
	this.bg.src = "assets/gfx/menu/bg2.png";

	this.audio = new Audio('assets/mfx/menubgm.ogg');
}

MainMenu.prototype.createScene = function() {

}

MainMenu.prototype.Update = function() {
	if( this.audioOn )
		this.audio.play();
	else
		this.audio.pause();
}

MainMenu.prototype.checkAudioSelect = function() {
	for( i = 0; i < game.touches.length; i++ ) {
		var touch = game.touches[i];

		if( touch.clientX > 20 && touch.clientX < 40 && touch.clientY > 20 && touch.clientY < 40 && this.audioOn == false)
			this.audioOn = true;
		else if( touch.clientX > 20 && touch.clientX < 40 && touch.clientY > 20 && touch.clientY < 40 && this.audioOn == true)
			this.audioOn = false;
	}
}

MainMenu.prototype.checkMultiSelect = function() {
	for( i = 0; i < game.touches.length; i++ ) {
		var touch = game.touches[i];

		if( touch.clientX > game.screenWidth - 40 && touch.clientX < game.screenWidth - 20 && touch.clientY > 20 && touch.clientY < 40 && this.multiOn == false)
			this.multiOn = true;
		else if( touch.clientX > game.screenWidth - 40 && touch.clientX < game.screenWidth - 20 && touch.clientY > 20 && touch.clientY < 40 && this.multiOn == true)
			this.multiOn = false;
	}
}

MainMenu.prototype.Draw = function() {
	game.ctx.drawImage(this.playBtn, game.screenWidth - 128, game.screenHeight - 32, 128, 32);
	game.ctx.drawImage(this.exitBtn, game.screenWidth - 128, game.screenHeight + 64, 128, 32);
	
	if(this.audioOn == true)
		game.ctx.drawImage(this.audioBtn,0, 64, 64, 64, 20, 20, 20, 20)
	else 
		game.ctx.drawImage(this.audioBtn,0, 0, 64, 64, 20, 20, 20, 20)

	if(this.multiOn == true)
		game.ctx.drawImage(this.multiBtn, 0, 0, 64, 64, game.screenWidth - 40, 20, 20, 20)
	else
		game.ctx.drawImage(this.multiBtn, 0, 64, 64, 64, game.screenWidth - 40, 20, 20, 20)
}
