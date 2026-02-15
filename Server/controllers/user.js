const User = require("../models/user")

const handleGetAllUsers = async (req, res) => {
    const allDbUsers = await User.find({})
    res.json(allDbUsers)
}

const GetUserByID = async (req, res) => {
    const user = await User.findById(req.params.id)
    !user ? res.send("User Not Found") : ''
    return res.json(user)
}

const GetUserByIDAndUpdate = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { 'last_name': "Changed To Default" })
    res.json({ Status: 'Success Patch' })
}

const GetUserByIDAndDelete = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ Status: 'Success Delete' })
}

const CreateNewUser = async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) { return res.send(400).json({ msg: "All Fields are Required..." }) }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    return res.status(201).json({ msg: "Success", id: result._id })
}

module.exports = {
    handleGetAllUsers,
    GetUserByID,
    GetUserByIDAndUpdate,
    GetUserByIDAndDelete,
    CreateNewUser
}