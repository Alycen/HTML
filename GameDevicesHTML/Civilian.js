var UP=1;
var DOWN=2;
var LEFT=3;
var RIGHT=4;
var STOP=5;

function Civilian(xPos, yPos) {
	this.dir = Math.floor(Math.random() * STOP) + UP; 
	this.timer = 100;
	this.x = xPos;
	this.y = yPos;
	//texture - not a touch area
	this.scale = 1;
	this.width = 20;	//width of tempNPC
	this.height = 45;	//height of tempNPC
	this.isShot = false;

	this.imgA = new Image();
	this.imgA.src = "assets/gfx/game/npc/a.png";
	this.imgB = new Image();
	this.imgB.src = "assets/gfx/game/npc/b.png";
	this.imgC = new Image();
	this.imgC.src = "assets/gfx/game/npc/c.png";
	this.imgD = new Image();
	this.imgD.src = "assets/gfx/game/npc/d.png";
	//States - Default, Alert;
}

Civilian.prototype.Move = function() {
	// if statements for each state i.e: if (Normal) move this way, else (Alert) move this way
	var verticleSpeed= 3, horizontalSpeed= 5;
	if ( this.timer == 0 ) {
		this.timer = 50;
		this.dir = Math.floor(Math.random() * STOP) + UP;
	}

	if ( this.dir == UP ) {
		this.y -= verticleSpeed;
	}
	else if ( this.dir == DOWN ) {
		this.y += verticleSpeed;
	}
	else if ( this.dir == LEFT ) {
		this.x -= horizontalSpeed;
	}
	else if ( this.dir == RIGHT ) {
		this.x += horizontalSpeed;
	}
	else {}
	
	this.timer--;
}

Civilian.prototype.Update = function() {
	this.Move();
	if (this.x < 0 && this.dir == LEFT) {
		this.dir = RIGHT;
	}
	if (this.x > game.screenWidth && this.dir == RIGHT) {
		this.dir = LEFT;
	}
	if (this.y < 0 && this.dir == UP) {
		this.dir = DOWN;
	}
	if ( this.y > game.screenHeight && this.dir == DOWN) {
		this.dir = UP;
	}
}

Civilian.prototype.Draw = function() {
	game.ctx.drawImage(this.imgA, this.x, this.y, this.width, this.height);
}

///////////////////////////////////////////
// GET METHODS
///////////////////////////////////////////

Civilian.prototype.getScale = function() {
	return this.scale;
}

Civilian.prototype.getPositionX = function() {
	return this.x;
}
Civilian.prototype.getPositionY = function() {
	return this.y;
}

Civilian.prototype.Shot = function() {
	return this.isShot;
}

//Civilian.prototype.getCivSprite() {
//	  ?
//}

///////////////////////////////////////////
// SET METHODS
///////////////////////////////////////////

Civilian.prototype.setScale = function(newScale) {
	this.scale = newScale;
}

Civilian.prototype.setPositionX = function(newX) {
	this.x = newX;
}
Civilian.prototype.setPositionY = function(newY) {
	this.y = newY;
}

Civilian.prototype.setShot = function(shot) {
	this.isShot = shot;
}