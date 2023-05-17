(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    //document.getElementById('go').addEventListener('click', start);
    
    function start() {
       document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('亲爱的艳'))
		.then(() => engine.shake())
        .then(() => engine.toText(''))
        .then(() => engine.shake())
        .then(() => engine.toText('520快乐！'))
        .then(() => engine.shake())
        .then(() => engine.toText('爱你的阳'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }

	start();
})();
