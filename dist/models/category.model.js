"use strict";

/**
 * Title: Write a program using JavaScript on Category Model
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
 * Date: 11, November 2023
 */

/* external imports */
var mongoose = require("mongoose");
var validator = require("validator");
var ObjectId = mongoose.Schema.Types.ObjectId;

/* create category schema */
var categorySchema = new mongoose.Schema({
  // for title
  title: {
    type: String,
    required: [true, "Please, provide a category name"],
    trim: true,
    unique: [true, "Same category already exists"],
    maxLength: [100, "Your title would be at most 100 characters"]
  },
  // for description
  description: {
    type: String,
    required: [true, "Please, provide category description"],
    trim: true,
    maxLength: [500, "Your description would be at most 500 characters"]
  },
  // for thumbnail
  thumbnail: {
    url: {
      type: String,
      validate: [validator.isURL, "Please provide a valid thumbnail URL"],
      "default": "https://placehold.co/296x200.png"
    },
    public_id: {
      type: String,
      "default": "N/A"
    }
  },
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
  // for products
  products: [{
    type: ObjectId,
    ref: "Product"
  }],
  // for creator
  creator: {
    type: ObjectId,
    ref: "User"
  },
  // for category  time stamps
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

/* middleware for category */
categorySchema.pre("save", function (next) {
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

/* create category model schema */
var Category = mongoose.model("Category", categorySchema);

/* export category schema */
module.exports = Category;