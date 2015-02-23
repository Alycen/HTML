var m_civArray = [];
var m_copArray = [];
var m_ammo;

function Level (levelNum) {
	// List<Civilian> // includes objects that inherit from Civilian
	this.x = 0;
	this.y = 0;
	this.width = game.screenWidth;
	this.height = game.screenHeight;
	this.scale = 1;

	this.alert = true;

	this.curtain = new Image();
	this.curtain.src = "assets/gfx/game/level/curtains.png";
	this.city = new Image();
	this.city.src = "assets/gfx/game/level/city.png";	
	this.tent = new Image();
	this.tent.src = "assets/gfx/game/level/tent.png";
	this.knoll = new Image();
	this.knoll.src = "assets/gfx/game/level/grassyknoll.png";

	for( i = 0; i < 6; i++ ) {
		if(Math.floor(Math.random() * 2) + 1 == 1)
			m_civArray[i] = new Civilian(-50, Math.floor(Math.random() * 320) + 280, 1);
		else 
			m_civArray[i] = new Civilian(game.screenWidth + 20, Math.floor(Math.random() * 300) + 210, 1);
	}

	if(Math.floor(Math.random() * 2) + 1 == 1)
		m_civArray[m_civArray.length] = new Civilian(-50, Math.floor(Math.random() * 320) + 280, 2);
	else 
		m_civArray[m_civArray.length] = new Civilian(game.screenWidth + 20, Math.floor(Math.random() * 300) + 210, 2);

	if( this.alert ) {
		for( i = 0; i < 3; i++ ) {
			if(Math.floor(Math.random() * 2) + 1 == 1)
				m_copArray[i] = new Police(-50, Math.floor(Math.random() * 320) + 280);
			else 
				m_copArray[i] = new Police(game.screenWidth + 20, Math.floor(Math.random() * 300) + 210);
		}
	}		
}

Level.prototype.Update = function() {
	for( i = 0; i < m_civArray.length; i ++ )
		m_civArray[i].Update();

	for( i = 0; i < m_copArray.length; i ++ )
		m_copArray[i].Update();
}

Level.prototype.Draw = function() {

	game.ctx.drawImage(this.knoll, this.x, this.y, this.width, this.height);
	for( i = 0; i <  m_civArray.length; i ++ )
		m_civArray[i].Draw();

	if(this.alert) {
		for( i = 0; i < m_copArray.length; i ++ )
			m_copArray[i].Draw();
	}	

	game.ctx.drawImage(this.curtain, this.x, this.y, this.width, this.height);
}

Level.prototype.checkShot = function(x,y) {
	if (this.alert == false)
		this.alert = true;

	for( i = 0; i < m_civArray.length; i ++ )
		m_civArray[i].checkShot(x,y);

	if( this.alert) {
		for ( i = 0; i < m_copArray.length; i ++ ) 
			m_copArray[i].checkShot(x,y); 
	}

}