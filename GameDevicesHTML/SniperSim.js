var game;
var MAINMENU = 0, LEVEL_ONE = 1, LEVEL_TWO = 2;
var mainMenu, level_1, level_2;
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function Game() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
	this.isMultiplayer = false;

	
	
	

	this.sniper = new Image();
	this.sniper.src = "assets/gfx/game/rifle/scope.png"
	this.sniperIsVisible = false;
	this.scene = MAINMENU;
}

function main() {
	game = new Game();
	mainMenu = new MainMenu();
	level_1 = new Level(1);
	level_2 = new Level(2);
	//setInterval(game.gameLoop, 20000);
	game.initCanvas();
	game.Draw();

	game.gameLoop();
}

Game.prototype.checkScene = function() {
	if( this.scene == MAINMENU ) {}

}

Game.prototype.initCanvas = function() {
	this.canvas = document.createElement('canvas');

	this.ctx = this.canvas.getContext('2d');

	document.body.appendChild(this.canvas);

	this.canvas.width = this.screenWidth;
	this.canvas.height  = this.screenHeight;
}

Game.prototype.gameLoop = function() {
	
	game.Draw();
	if(this.scene == MAINMENU)
		mainMenu.Update();
	else if(this.scene == LEVEL_ONE)
		level_1.Update();
	else if(this.scene == LEVEL_TWO)
		level_2.Update();

	window.requestAnimFrame(game.gameLoop);

}

Game.prototype.Draw = function() {
	this.ctx.clearRect(0,0,this.screenWidth, this.screenHeight);
	if(this.scene == MAINMENU) {
		mainMenu.isVisible = true;
		level_1.isVisible = false;
		level_2.isVisible = false;
		mainMenu.Draw()
	}
	else if(this.scene == LEVEL_ONE) {
		mainMenu.isVisible = false;
		level_1.isVisible = true; 
		level_2.isVisible = false;
		level_1.Draw();
	}
	else if(this.scene == LEVEL_TWO) {
		mainMenu.isVisible = false;
		level_1.isVisible = false;
		level_2.isVisible = true;
		level_2.Draw();
	}
}

Game.prototype.setMultiplayer = function(state) {
	this.isMultiplayer = state;
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
