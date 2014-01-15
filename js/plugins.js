// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function checkContentHeight(target){
	var stageHeight=$( window ).height();
	var newHeight = (stageHeight/2)-(target.height()/2);
	return newHeight;
}

function checkContentWidth(target){
	var stageWidth=$( window ).width();
	var newWidth = (stageWidth/2)-(target.width()/2);
	return newWidth;
}