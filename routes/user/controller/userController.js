const bcrypt = require('bcryptjs');
const User = require('../model/User');

async function signup(req, res) {
    const { username, email, password, firstName, lastName } = req.body;


    try{
        let salt = await bcrypt.genSalt(12);
        let hashedPassword = await bcrypt.hash(password, salt);

        const createdUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        let savedUser = await createdUser.save();

        res.json({ message: "success", data: savedUser });
    } catch (e) {
        res.status(500).json({ message: "failure", data: e.message });

    }




}

module.exports = {
    signup,

}