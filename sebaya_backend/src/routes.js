// src/routes.js
const router = require("express").Router();
const express = require("express");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Route MASTER
/*const categoryRoutes = require("./modules/master/category/categoryRoutes");
router.use("/master/category", categoryRoutes);*/

// Route AUTH
router.use("/master/district", require("./modules/master/district"));

module.exports = router;
