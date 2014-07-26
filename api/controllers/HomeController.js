/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {
    res.view('home/easy_go_V2' ,{
      //user: req.user
    });
    //console.log(req.user);
  }
};
