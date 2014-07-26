/**
 * HistroyController
 *
 * @description :: Server-side logic for managing histroys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	findUser: function(req, res){
		console.log(req.params);
		var userid = req.params.id;

		History
		.find({userid: userid})
		.sort({createdAt: -1})
		.exec(function(err,data){
			res.send(data);
		})
	}
};

