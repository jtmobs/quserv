"use strict";

/**
 * Title: Write a program using JavaScript on Purchase Model
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

/* create purchase schema */
var purchaseSchema = new mongoose.Schema({
  // for customer
  customer: {
    type: ObjectId,
    ref: "User"
  },
  // for products
  products: [{
    product: {
      type: ObjectId,
      ref: "Product"
    },
    quantity: {
      type: Number,
      "default": 1
    }
  }],
  // for customer ID
  customerId: {
    type: String,
    required: true
  },
  // for order ID
  orderId: {
    type: String,
    required: true
  },
  // for total amount
  totalAmount: {
    type: Number,
    required: true
  },
  // order status
  status: {
    type: String,
    "enum": ["pending", "delivered"],
    "default": "pending"
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

/* create purchase model */
var Purchase = mongoose.model("Purchase", purchaseSchema);

/* export purchase model */
module.exports = Purchase;