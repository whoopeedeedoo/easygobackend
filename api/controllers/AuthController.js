/**
 * AuthController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var passport = require('passport');
var _ = require('underscore');

module.exports = {

  index: function(req, res) {
    res.view("/");
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },

  // http://developer.github.com/v3/
  // http://developer.github.com/v3/oauth/#scopes
  github: function(req, res) {
    passport.authenticate('github', { failureRedirect: '/login' }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view('500');
          return;
        }

        res.redirect('/');
        return;
      });
    })(req, res);
  },

  // https://developers.facebook.com/docs/
  // https://developers.facebook.com/docs/reference/login/
  facebook: function(req, res) {
    passport.authenticate('facebook', { failureRedirect: '/login', scope: ['email'] }, function(err, user) {
      //When the login operation completes, user will be assigned to req.user.
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
        }
        res.redirect('/');
        return;
      });
    })(req, res);
  },

    facebook_token: function(req, res) {
    passport.authenticate('facebook-token', { failureRedirect: '/android_login', scope: ['access_token'] }, function(err, user) {
      //When the login operation completes, user will be assigned to req.user.
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
        }
        var info = {message:"yes"};
        info.message = "yes";
        info = _.extend(info, req.user);
        res.json(info);
      });
    })(req, res);
  },

  // https://developers.google.com/
  // https://developers.google.com/accounts/docs/OAuth2Login#scope-param
  google: function(req, res) {
    passport.authenticate('google', { failureRedirect: '/login', scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'] }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view('500');
          return;
        }

        res.redirect('/');
        return;
      });
    })(req, res);
  },

  // https://apps.twitter.com/
  // https://apps.twitter.com/app/new
  twitter: function(req, res) {
    passport.authenticate('twitter', { failureRedirect: '/login' }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view('500');
          return;
        }

        res.redirect('/');
        return;
      });
    })(req, res);
  },

  isAuthenticated: function(req, res){
        console.log("isAuthenticated "+req.isAuthenticated());
   var info = {message:"no"};
    if(req.isAuthenticated())
    {
        info.message = "yes";
        info = _.extend(info, req.user);
    }
        res.json(info);
  },
};
