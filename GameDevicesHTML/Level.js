var civ1, civ2, civ3, civ4, civ5;

function Level () {
	// List<Civilian> // includes objects that inherit from Civilian
	this.x = 0;
	this.y = 0;
	this.width = game.screenWidth;
	this.height = game.screenHeight;
	this.scale = 1;

	this.curtain = new Image();
	this.curtain.src = "assets/gfx/game/level/curtains.png";
	this.city = new Image();
	this.city.src = "assets/gfx/game/level/city.png";	
	this.tent = new Image();
	this.tent.src = "assets/gfx/game/level/tent.png";
	this.knoll = new Image();
	this.knoll.src = "assets/gfx/game/level/grassyknoll.png";

	civ1 = new Civilian(-150, game.screenHeight - 300, 1);
	civ2 = new Civilian(-24, game.screenHeight - 297, 1);
	civ3 = new Civilian(game.screenWidth + 20, game.screenHeight - 257, 1);
	civ4 = new Civilian(-30, game.screenHeight - 320, 1);
	civ5 = new Civilian(game.screenWidth + 20, game.screenHeight - 311, 2);
}

// The levels scale will increase when the PLAYER inits the RangeFinder State or Sniper State
// CheckShotCivilian(Civilian Victim)

Level.prototype.Update = function() {
	civ1.Update();
	civ2.Update();
	civ3.Update();
	civ4.Update();
	civ5.Update();
}

Level.prototype.Draw = function() {
	game.ctx.drawImage(this.knoll, this.x, this.y, this.width, this.height);
	civ1.Draw();
	civ2.Draw();
	civ3.Draw();
	civ4.Draw();
	civ5.Draw();
	//console.log("Level Drawing");
}