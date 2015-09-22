(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// $(document).ready(function() {

var Router = Backbone.Router.extend({
	routes: {
		'play': 'goPlay',
		'leaderboard': 'checkStats',
		'settings': 'changeSettings'
	},
	goPlay: function goPlay() {

		function loading() {
			$('nav').show();
			$('section').hide();
			$('#loadScreen').hide();
			$('#gameScreen').show();
			$('body').css({ 'background-color': '#DDDDDD' });
		}

		setTimeout(loading, 2000);

		$('body').css({ 'background-color': '#000000' });
		$('nav').hide();
		$('section').hide();
		$('#loadScreen').show();
	},

	checkStats: function checkStats() {
		$('section').hide();
		$('#leaderboard').show();
	},

	changeSettings: function changeSettings() {
		$('section').hide();
		$('#settings').show();
	}

});

var r = new Router();
Backbone.history.start();

// })

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map