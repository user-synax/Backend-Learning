const usersURL = "https://dummyjson.com/users";

const getAllUsers = async (req, res) => {
    const allUsers = await fetch(usersURL);
    const users = await allUsers.json();
    res.json(users);
};


module.exports = {
    getAllUsers,
};
