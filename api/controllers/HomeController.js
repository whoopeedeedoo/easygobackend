/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {
    res.view('auth/easy_go_V2');
    //console.log(req.user);
  }
};
