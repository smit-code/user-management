const User = require("../models/User");

exports.postUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const imageUrl = req.body.imageUrl;

    const user = new User({
      name: name,
      email: email,
      number: number,
      imageUrl: imageUrl,
    });

    const savedUser = await user.save(user);
    // res.json(savedUser);
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err);
  }
};

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.send(users);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// exports.getUsers = (req, res, next) => {
//   User.find()
//     .then((users) => {
//       console.log(users);
//       res.render("home", {
//         user: users,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ id });
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedNumber = req.body.number;
    const updatedImageUrl = req.body.imageUrl;
    const user = await User.findOne({ id });
    user.name = updatedName;
    user.email = updatedEmail;
    user.number = updatedNumber;
    user.imageUrl = updatedImageUrl;
    const updatedUser = await user.save();
    res.send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndRemove(id);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};
