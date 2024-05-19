"use strict";

/**
 * Title: Write a program using JavaScript on Index
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 09, November 2023
 */

/* external imports */
var mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
var app = require("./app");
var consoleMessage = require("./utils/console.util");
var port = process.env.PORT || 3000;

/* database connection */
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return consoleMessage.successMessage("Connected to MongoDB.");
})["catch"](function (error) {
  return consoleMessage.errorMessage(error.message);
});

/* establish server port */
app.listen(port, function () {
  consoleMessage.warningMessage("Server is running on port ".concat(port, "."));
});