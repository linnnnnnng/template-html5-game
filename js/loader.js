/*!
 * 
 * All your scripts insert here
 * 
 */
 var stageWidth,stageHeight=0;
 var loadCount=checkCount=0;
 var mainScript_arr=[
				'js/vendor/jquery.touchSwipe.min.js',
				'http://code.createjs.com/preloadjs-0.4.1.min.js',
        		'http://code.createjs.com/easeljs-0.7.0.min.js',
        		'http://code.createjs.com/soundjs-0.5.2.min.js',
        		'js/vendor/greensock/easing/EasePack.min.js',
        		'js/vendor/greensock/TweenMax.min.js',
				'js/main.js']
 var loadpage='';
 var loaded=false;
 var pagInit=false;
 
 $(function() {
 	if(pagInit==false){
		pagInit=true;
		
		resizeMainBrowser();
		$(window).resize(function(){
			resizeMainBrowser();
		});
		
		initLoader();
		//prevent mobile touch move
		/*document.body.addEventListener('touchmove', function(e){ 				
			e.preventDefault(); 				
		});*/
	 }
});

/*!
 * 
 * Resize
 * 
 */
 function resizeMainBrowser(){
	stageWidth=$(window).width();
	stageHeight=$(window).height();
	
	$('#mainLoader').css('left', checkContentWidth($('#mainLoader')));
	$('#mainLoader').css('top', checkContentHeight($('#mainLoader')));
	$('#mainHolder').css('left', checkContentWidth($('#mainHolder')));
	$('#mainHolder').css('top', checkContentHeight($('#mainHolder')));
	
	$('.mobileRotate').css('left', checkContentWidth($('.mobileRotate')));
	$('.mobileRotate').css('top', checkContentHeight($('.mobileRotate')));
 }
 
/*!
 * 
 * Loader
 * 
 */
function initLoader(){
	//check is mobile then load dif script or page
	loadpage='main.html';
	script_arr=mainScript_arr
	
	loadCount=checkCount=script_arr.length;
        for(var n=0;n<loadCount;n++){
	        var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = script_arr[n];
		document.body.appendChild(script);
	}
	checkScript()
}

function checkScript(){
	checkCount=loadCount;
	for(var n=0;n<loadCount;n++){
		  $.getScript( script_arr[n] )
		  .done(function( script, textStatus ) {
			  checkCount--
			  onLoadHandler();
			  console.log( textStatus +' '+checkCount);
		  })
		  .fail(function( jqxhr, settings, exception ) {
			console.log( exception );
		});
	}
}

function onLoadHandler(){
	if(checkCount==0&&loaded==false){
		loaded=true;
		$.ajax({
		    method: 'GET',
		    url: loadpage,
		    dataType: 'html',
		    success: function(page) {
				$('#mainHolder').empty();
		    	$('#mainHolder').append(page);
				initPreload();
		    },
		    error: function() {
		        console.log('Error');
		    },
		    progress: function(e) {
		    	console.log('progress');
		        if(e.lengthComputable) {
		            var pct = (e.loaded / e.total) * 100;
				console.log(pct);
		        } else {
		            console.warn('Content Length not reported!');
		        }
		    }
		});
	}
}