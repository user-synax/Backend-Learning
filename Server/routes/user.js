const express = require("express")
const { handleGetAllUsers,
    GetUserByID,
    GetUserByIDAndUpdate,
    GetUserByIDAndDelete,
    CreateNewUser
} = require("../controllers/user")
const router = express.Router()

router.route("/")
    .get(handleGetAllUsers)
    .post(CreateNewUser)

router
    .route("/:id")
    .get(GetUserByID)
    .patch(GetUserByIDAndUpdate)
    .delete(GetUserByIDAndDelete)


module.exports = router;