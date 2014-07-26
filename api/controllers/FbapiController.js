/**
 * FbapiController
 *
 * @description :: Server-side logic for managing fbapis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('underscore');
var request = require('request');

module.exports = {
	index: function(req, res) {

		// var postbody = req.body;
		
		var tokenbody = {id:"277b49909b1d1400b8a139f0d575cad5", secret_key:"2681a844c37d538bbd53d5ac101a3f43"};
		

		request.post("http://api.ser.ideas.iii.org.tw/api/user/get_token", {form: tokenbody}, function(err, response, body){
			var token = JSON.parse(body).result.token;
  			var postbody = {coordinates: "25.041399,121.554233", radius:"20", token: body.result.token};
  			request
			.post("http://api.ser.ideas.iii.org.tw/api/fb_checkin_search", {form: postbody}, function(err, response, body){
				res.send(body);
			})
  		})
		
		

    
  	},

  	getToken: function(req, res){
  		var postbody = {id:"277b49909b1d1400b8a139f0d575cad5", secret_key:"2681a844c37d538bbd53d5ac101a3f43"};

  		request.post("http://api.ser.ideas.iii.org.tw/api/user/get_token", {form: postbody}, function(err, response, body){
  			res.send(body);
  		})
  	},


  	getCheckin: function(req, res){
  		var postbody = req.body;

  		request.post("http://api.ser.ideas.iii.org.tw/api/fb_checkin_search", {form: postbody}, function(err, response, body){
  			res.send(body);
  		})
  	}
 }
	


