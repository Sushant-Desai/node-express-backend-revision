function getAllUsers(req, res) {
    res.json({ message: "All users " })
}

function createUser(req, res) {
    // const data = req.body;
    console.log(req.body);

    const data=req.body;

    res.status(201).json({
        message: "User Created ",
        data:data
    })
}

module.exports = {
    getAllUsers,
    createUser
};