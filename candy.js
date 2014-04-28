var exec = require('child_process').exec,
	config = require('./config'),
	request = require('request');
var _things = [];
	
var createThing = function(){
	return { 
		"name": 'Candy machine',
		"id": 3432,
		"iconType": "candy",
		"position": config.getPosition(),
		"quickAction":{"type":"button", "name":"Candy please!", "id":"1"},
		"actionControles": [
                {"type":"button", "name":"One", "id":"1"},
                {"type":"button", "name":"Two", "id":"2"}
            ]
	};	
};


exports.relese = function(thing){ 
	request.post('https://agent.electricimp.com/XFMBLC74v1zt', {form:{key:'value'}});
};

exports.getThings = function(callback){

	   _things.push(createThing());
		

	  callback(_things);
	};	

