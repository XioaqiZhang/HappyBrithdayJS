(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    //document.getElementById('go').addEventListener('click', start);
    
    function start() {
       // document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('亲爱的'))
		.then(() => engine.shake())
        .then(() => engine.toText('小徒弟'))
        .then(() => engine.shake())
        .then(() => engine.toText('生日快乐！'))
        .then(() => engine.shake())
        .then(() => engine.toText('天天开心！'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }

	start();
})();
