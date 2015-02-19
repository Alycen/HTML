var civ1, civ2, civ3, civ4, civ5;

function Level () {
	// List<Civilian> // includes objects that inherit from Civilian
	this.x = 0;
	this.y = 0;
	this.width = game.screenWidth;
	this.height = game.screenHeight;
	this.scale = 1;
	this.img = new Image();
	this.img.src = "town.png";	// Sprite / Image for level
	// TargetInfo
	civ1 = new Civilian(150,50);
	civ2 = new Civilian(200, 340);
	civ3 = new Civilian(30, 60);
	civ4 = new Civilian(300, 40);
	civ5 = new Civilian(250, 100);
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
	game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	civ1.Draw();
	civ2.Draw();
	civ3.Draw();
	civ4.Draw();
	civ5.Draw();
	//console.log("Level Drawing");
}