function MainMenu () {
	this.playBtn = new Image();
	this.playBtn.src = "assets/gfx/menu/buttonPlay.png";
	this.exitBtn = new Image();
	this.exitBtn.src = "assets/gfx/menu/buttonExit.png";
	this.audioBtn = new Image();
	this.audioBtn.src = "assets/gfx/menu/buttonAudio.png";
	this.multiBtn = new Image();
	this.multiBtn.src = "assets/gfx/menu/buttonMulti.png";

	this.bg = new Image();
	this.bg.src = "assets/gfx/menu/bg2.png";

	this.audio = new Audio('assets/mfx/menubgm.ogg');
}

MainMenu.prototype.playMusic = function() {
	this.audio.play();
}

MainMenu.prototype.pauseMusic = function() {
	this.audio.pause();
}

MainMenu.prototype.createScene = function() {

}

function onTouchStart(e) {
    e.preventDefault();
    console.log("touch start");
}

function onTouchMove(e) {
    e.preventDefault();
    game.touches = e.touches;
    console.log("touch move");
}

function onTouchEnd(e) {
    e.preventDefault();
    console.log("touch end");
}

MainMenu.prototype.Draw = function() {
	game.ctx.drawImage(this.playBtn, game.screenWidth - 128, game.screenHeight - 32, 128, 32);
	game.ctx.drawImage(this.exitBtn, game.screenWidth - 128, game.screenHeight + 64, 128, 32);
}
