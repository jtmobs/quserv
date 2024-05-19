"use strict";

/**
 * Title: Write a program using JavaScript on Review Model
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

/* create review schema */
var reviewSchema = new mongoose.Schema({
  // for reviewer
  reviewer: {
    type: ObjectId,
    ref: "User"
  },
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
  },
  // for rating
  rating: {
    type: Number,
    required: [true, "Please, provide a rating"],
    min: 1,
    max: 5
  },
  // for comment
  comment: {
    type: String,
    required: [true, "Please, provide a comment"],
    maxLength: [200, "Your comment should be at most 200 characters"]
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

/* create review model */
var Review = mongoose.model("Review", reviewSchema);

/* export Review model */
module.exports = Review;