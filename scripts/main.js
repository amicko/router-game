'use strict';

// $(document).ready(function() {

var Router = Backbone.Router.extend({
	routes: {
		'play': 'goPlay',
		'leaderboard': 'checkStats',
		'settings': 'changeSettings'
	},
	goPlay: function() {

		function loading() {
			$('nav').show();
			$('section').hide();
			$('#loadScreen').hide();
			$('#gameScreen').show();
			$('body').css({'background-color': '#DDDDDD'})
		}

		setTimeout(loading, 2000);

		$('body').css({'background-color': '#000000'})
		$('nav').hide();
		$('section').hide();
		$('#loadScreen').show();
	},

	checkStats: function() {
		$('section').hide();
		$('#leaderboard').show();
	},

	changeSettings: function() {
		$('section').hide();
		$('#settings').show();
	}

})

var r = new Router();
Backbone.history.start();

// })