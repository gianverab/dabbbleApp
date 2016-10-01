
(function(){
	angular.module('dabbbleApp')
		.controller('MainCtrl', function(){
			var me = this;

			me.name = 'Mastergian';
			me.sayHello = function(){
				me.name = 'Gian Vera';
			}
		});
})();