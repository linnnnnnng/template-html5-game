/*!
 * 
 * All your scripts insert here
 * 
 */
function initPreload(){
	loader = new createjs.LoadQueue(false);
	manifest = [{src:'sound/sound.ogg', id:'button'}
				];
	createjs.Sound.alternateExtensions = ["mp3"];
	loader.installPlugin(createjs.Sound);
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

function handleProgress() {
	console.log(loader.progress);	
}
 
function handleFileError(evt) {
	console.log("error ", evt);
}

function fileComplete(evt) {
	var item = evt.item;
	console.log("Event Callback file loaded ", evt);
}

function handleComplete() {
	initMain();
};

function initMain(){
	//start page script here
	$('.content').css('visibility', 'visible');
	initGameCanvas();
	buildGameCanvas();
}

//canvas 
var stage
function initGameCanvas(){
	stage = new createjs.Stage("gameCanvas");
}

function buildGameCanvas(){
	var box = new createjs.Shape();
	box.graphics.beginFill("#000").drawRect(0, 0, 100, 100);
	stage.addChild(box);
		
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);	
}

 function removeGameCanvas(){
	 stage.autoClear = true; // This must be true to clear the stage.
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

function tick(event) {
	stage.update(event);
}