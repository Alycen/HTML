function MainMenu () {
	this.isVisible = false;

	this.playBtn = new Image();
	this.playBtn.src = "assets/gfx/menu/buttonPlay.png";
	this.exitBtn = new Image();
	this.exitBtn.src = "assets/gfx/menu/buttonExit.png";
	this.mainBtnWidth = 256;
	this.mainBtnHeight = 64;

	this.audioBtn = new Image();
	this.audioBtn.src = "assets/gfx/menu/buttonAudio.png";
	this.audioOn = true;

	this.multiBtn = new Image();
	this.multiBtn.src = "assets/gfx/menu/buttonMulti.png";
	this.multiOn = false;

	this.smallBtn = 40;

	this.bg = new Image();
	this.bg.src = "assets/gfx/menu/bg2.png";

	this.audio = new Audio('assets/mfx/menubgm.ogg');
	this.click = new Audio('assets/mfx/button.ogg');
}

MainMenu.prototype.createScene = function() {

}

MainMenu.prototype.Update = function() {
	this.checkAudioSelect();
	this.checkMultiSelect();
	this.checkPlaySelect();

	if( this.audioOn )
		this.audio.play();
	else
		this.audio.pause();
}

MainMenu.prototype.checkPlaySelect = function() {
	for( i = 0; i < game.touches.length; i++ ) {
		var touch = game.touches[i];

		//game.screenWidth / 2) - (this.mainBtnWidth / 2), (game.screenHeight / 2) - (this.mainBtnHeight / 2) - 10, this.mainBtnWidth, this.mainBtnHeight

		if(( touch.clientX > game.screenWidth / 2) - (this.mainBtnWidth / 2) && touch.clientX < 40 && touch.clientY > 20 && touch.clientY < 40 ) {
			this.audioOn = true;
			this.click.play();
		}
		else if( touch.clientX > 20 && touch.clientX < 40 && touch.clientY > 20 && touch.clientY < 40 ) {
			this.audioOn = false;
			this.click.play();
		}
	}
}


MainMenu.prototype.checkAudioSelect = function() {
	for( i = 0; i < game.touches.length; i++ ) {
		var touch = game.touches[i];

		if( touch.clientX > 20 && touch.clientX < 20 + this.smallBtn && touch.clientY > 20 && touch.clientY < 20 + this.smallBtn && this.audioOn == false) {
			this.audioOn = true;
			this.click.play();
		}
		else if( touch.clientX > 20 && touch.clientX < 20 + this.smallBtn && touch.clientY > 20 && touch.clientY < 20 + this. smallBtn && this.audioOn == true) {
			this.audioOn = false;
			this.click.play();
		}
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
	if(this.isVisible) {
		game.ctx.drawImage(this.bg, 0, 0, game.screenWidth, game.screenHeight);
		game.ctx.drawImage(this.playBtn, (game.screenWidth / 2) - (this.mainBtnWidth / 2), (game.screenHeight / 2) - (this.mainBtnHeight / 2) - 10, this.mainBtnWidth, this.mainBtnHeight);
		game.ctx.drawImage(this.exitBtn, (game.screenWidth / 2) - (this.mainBtnWidth / 2), (game.screenHeight / 2) + (this.mainBtnHeight / 2) + 10, this.mainBtnWidth, this.mainBtnHeight);
	
		if(this.audioOn == true)
			game.ctx.drawImage(this.audioBtn,0, 64, 64, 64, 20, 20, this.smallBtn, this.smallBtn)
		else 
			game.ctx.drawImage(this.audioBtn,0, 0, 64, 64, 20, 20, this.smallBtn, this.smallBtn)

		if(this.multiOn == false)
			game.ctx.drawImage(this.multiBtn, 0, 0, 64, 64, game.screenWidth - (this.smallBtn * 2), 20, this.smallBtn, this.smallBtn)
		else
			game.ctx.drawImage(this.multiBtn, 0, 64, 64, 64, game.screenWidth - (this.smallBtn * 2) , 20, this.smallBtn, this.smallBtn)
	}
	else {}
}
