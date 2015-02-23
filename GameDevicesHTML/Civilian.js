var m_active, m_alive, m_panic;

function Civilian(xPos, yPos, type) {
	this.dir = Math.floor(Math.random() * 2) + 1; 
	this.timer = this.timer = Math.floor(Math.random() * 300) + 75;
	this.x = xPos;
	this.y = yPos;

	this.speed = Math.floor(Math.random() * 5) + 1;
	this.scale = 1;
	this.width = 20;	
	this.height = 45;	
	this.isShot = false;
	this.isVisible = true;

	this.civType = type;
	this.imgA = new Image();
	this.imgA.src = "assets/gfx/game/npc/a.png";
	this.imgB = new Image();
	this.imgB.src = "assets/gfx/game/npc/b.png";
}

Civilian.prototype.Move = function() {
	if ( this.timer == 0 ) {
		this.timer = Math.floor(Math.random() * 300) + 75;
		this.dir = Math.floor(Math.random() * 2) + 1;
		this.speed = Math.floor(Math.random() * 5) + 1;
	}

	if (this.dir == 2)
		this.x += this.speed;
		
	//Right edge
	else if (this.dir == 1)
		this.x -= this.speed;	
	
	console.log("dslga eqweg")
	this.timer--;
}

Civilian.prototype.Update = function() {
	this.Move();
	if (this.x  < - 100) {
		this.dir =2;
	}
	if (this.x > game.screenWidth + 100) {
		this.dir = 1;
	}
}

Civilian.prototype.Draw = function() {
	if( this.isVisible)
		if( this.civType == 1)
			game.ctx.drawImage(this.imgA, this.x, this.y, this.width, this.height);
		else if( this.civType == 2)
			game.ctx.drawImage(this.imgB, this.x, this.y, this.width, this.height);
	else {}
}

Civilian.prototype.checkShot = function(x,y) {
	if (x < this.x && x > this.width && y < this.y && y > this.height)
		Shoot();
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

Civilian.prototype.getSprite = function(x) {
	if( x == 1 )
		return this.imgA;

	else if( x == 2 )
		return this.imgB;
}

Civilian.prototype.getType = function() {
	return this.civType;
}

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

Civilian.prototype.Shoot = function() {
	m_alive = false;

	this.isVisible = false;
}

Civilian.prototype.setType = function(x) {
	civType = x;
	if( x < 1 )
		this.civType = 1;
	else if( x > 2 )
		this.civType = 2;
}