////////////////////////////////////////////////////////////
// GAME
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	/*text_01.cursor = "pointer";
	text_01.addEventListener("click", function(evt) {
		startAnime(0);
	});*/
}

function startAnime(num){
	switch(num){
		case 0:
			//scene 0
		break;
		
		case 1:
			//scene 1
		break;	
	}
}

function updateLoop(){
}

$.sound = {};
function playSoundLoop(sound){
	if($.sound[sound]==null){
		$.sound[sound] = createjs.Sound.play(sound);
		$.sound[sound].removeAllEventListeners();
		$.sound[sound].addEventListener ("complete", function() {
			$.sound[sound].play();
		});
	}
}