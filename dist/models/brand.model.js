"use strict";

/**
 * Title: Write a program using JavaScript on Brand
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
 * Date: 11, November 2023
 */

/* external imports */
var mongoose = require("mongoose");
var validator = require("validator");
var ObjectId = mongoose.Schema.Types.ObjectId;

/* create brand schema */
var brandSchema = new mongoose.Schema({
  // for title
  title: {
    type: String,
    required: [true, "Please, provide a valid brand name"],
    trim: true,
    uppercase: true,
    unique: [true, "Same brand already exists"],
    maxLength: [100, "Your title would be at most 100 characters"]
  },
  // for description
  description: {
    type: String,
    required: [true, "Please, provide brand description"],
    trim: true,
    maxLength: [500, "Your description would be at most 500 characters"]
  },
  // for logo
  logo: {
    url: {
      type: String,
      validate: [validator.isURL, "Please provide a valid logo URL"],
      "default": "https://placehold.co/296x200.png"
    },
    public_id: {
      type: String,
      "default": "N/A"
    }
  },
  // for products
  products: [{
    type: ObjectId,
    ref: "Product"
  }],
  // for keynotes
  keynotes: [{
    type: String,
    trim: true
  }],
  // for tags
  tags: [{
    type: String,
    trim: true
  }],
  // for creator
  creator: {
    type: ObjectId,
    ref: "User"
  },
  // for brand  time stamps
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

/* middleware for brand */
brandSchema.pre("save", function (next) {
  var _this$title;
  // Capitalize title
  var splitStr = (_this$title = this.title) === null || _this$title === void 0 ? void 0 : _this$title.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  this.title = splitStr.join(" ");

  // replace space with hyphen and lowercase
  var newTags = [];
  this.tags.forEach(function (tag) {
    var _tag$replace;
    return newTags.push((_tag$replace = tag.replace(" ", "-")) === null || _tag$replace === void 0 ? void 0 : _tag$replace.toLowerCase());
  });
  this.tags = newTags;
  next();
});

/* create brand model schema */
var Brand = mongoose.model("Brand", brandSchema);

/* export brand schema */
module.exports = Brand;