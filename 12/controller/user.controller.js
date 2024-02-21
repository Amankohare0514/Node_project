const UserData = require("../data/users.data");

// Get all users
function GetAllUser(req, res) {
    res.send(UserData);
}

// Get user by id
function GetUserById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const item = UserData.find(item => item.id === id);
        if (!item) {
            res.send("no user found");
        }
        res.json(item);
    } catch (error) {
        res.send(error);
    }
}

// Post new user
function PostUserById(req, res) {
    try {
        const NewUser = req.body;
        if (!NewUser || !NewUser.name || !NewUser.age) {
            res.send("user not found");
        }
        NewUser.id = UserData.length + 1;
        UserData.push(NewUser);
        res.send(NewUser);
    } catch (error) {
        res.send(error);
    }
}

function DeleteUserByid(req, res) {
    try {
        const id = parseInt(req.params.id)
        const index = UserData.findIndex(item => item.id === id)
        if (index === -1) {
            res.send("user not found")
        }
        else {
            UserData.splice(index, 1);
            res.send(`User with id ${id} deleted successfully`);
        }
    } catch (error) {
        res.send(error)
    }
}

function UpdatedById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const index = UserData.findIndex(item => item.id === id);
        if (index === -1) {
            res.send("no user found");
        } else {
            const updatedUser = req.body;
            if (!updatedUser || !updatedUser.name || !updatedUser.age) {
                res.send("updated user data not provided");
            }
            updatedUser.id = id;
            UserData[index] = updatedUser;
            res.send(`User with id ${id} updated successfully`);
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = { GetAllUser, GetUserById, PostUserById, DeleteUserByid , UpdatedById };
