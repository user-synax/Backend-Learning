const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getUserWithId,
} = require("../Controllers/users.controller");

router.get("/users", getAllUsers);
router.get("/users/:id", getUserWithId);

module.exports = router;
