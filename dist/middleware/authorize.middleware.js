"use strict";

/**
 * Title: Write a program using JavaScript on Authorize Middleware
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https:/instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 20, November 2023
 */

function authorize() {
  for (var _len = arguments.length, role = new Array(_len), _key = 0; _key < _len; _key++) {
    role[_key] = arguments[_key];
  }
  return function (req, res, next) {
    // catch & match the user role
    var userRole = req.user.role;

    // revoke access based on role
    if (!role.includes(userRole)) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description: "You're not applicable to access this page and features"
      });
    }
    next();
  };
}
module.exports = authorize;