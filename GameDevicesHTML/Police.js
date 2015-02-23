function Police (xPos, yPos) {
	this.img = new Image();
	this.img.src = "assets/gfx/game/police/police.png";
	this.alerted = false;
	this.x = xPos;
	this.y = yPos;
	console.log("police");
}

Police.prototype = new Civilian()
{
	
}

Police.prototype.Alert = function(state) {
	this.alerted = state;
}

Police.prototype.Draw = function() {
	if(this.isVisible)
		game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}
