"use strict";

/**
 * Title: Write a program using JavaScript on Favorite Model
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
 * Date: 09, January 2024
 */

/* external imports */
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

/* create favorite schema */
var favoriteSchema = new mongoose.Schema({
  // for user
  user: {
    type: ObjectId,
    ref: "User"
  },
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
  },
  // for user account time stamps
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true
});

/* create favorite model */
var Favorite = mongoose.model("Favorite", favoriteSchema);

/* export favorite model */
module.exports = Favorite;