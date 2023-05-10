"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRole = exports.ROLES = void 0;
var ROLES = {
  superAdmin: 'superAdmin',
  ramalingamAdmin: 'ramalingamAdmin'
};
exports.ROLES = ROLES;

var checkRole = function checkRole() {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }

  return function (req, res, next) {
    try {
      if (!req.user) {
        return res.status(401).send('Unauthorized');
      } // console.log(roles, "from roles midd")
      // console.log(req.user, "from roles midd")


      var hasRole = roles.find(function (role) {
        return req.user.role === role;
      });

      if (!hasRole) {
        return res.status(403).send('You are not allowed to make this request.');
      }

      return next();
    } catch (error) {
      next(error);
    }
  };
};

exports.checkRole = checkRole;