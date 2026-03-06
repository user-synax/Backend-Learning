const usersURL = "https://dummyjson.com/users";

const getAllUsers = async (req, res) => {
    const allUsers = await fetch(usersURL);
    const users = await allUsers.json();
    res.json(users);
};

// TODO Fix the Bug [ TypeError: allUsers.filter is not a function ]
const getUserWithId = async (req, res) => {
    const allUsers = await fetch(usersURL);
    const HeaderId = req.params.id
    const User = allUsers.filter(user => id == HeaderId)
    res.json(User)
};

module.exports = {
    getAllUsers,
    getUserWithId
};
