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

    const savedUser = await user
      .save(user)
      .then((result) => {
        console.log("User saved successfully");
      })
      .catch((err) => {
        console.log(err);
      });

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

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      // console.log(users);
      res.render("home", {
        users: users,
        pageTitle: "ALL USER PAGE",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ id });
    // res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getPutUser = async (req, res) => {
  const userId = req.params.userId;
  // console.log(userId);

  try {
    User.findById(userId).then((user) => {
      if (!user) {
        return res.redirect("/");
      }
      // console.log(user);
      res.render("edit-user", {
        pageTitle: "Edit User",
        path: "/edituser",
        user: user,
      });
    });
    // res.send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putUser = async (req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedNumber = req.body.number;
  const updatedImageUrl = req.body.imageUrl;
  // console.log(updatedName, updatedEmail, updatedNumber, updatedImageUrl);

  User.findById(userId)
    .then((user) => {
      user.name = updatedName;
      user.email = updatedEmail;
      user.number = updatedNumber;
      user.imageUrl = updatedImageUrl;

      return user.save().then((result) => {
        console.log("User Updated Successfully");
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const deletedUser = await User.findByIdAndRemove(id)
      .then((user) => {
        console.log("User deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAddUser = (req, res) => {
  res.render("add-user", {
    pageTitle: "ADD USER",
    path: "/adduser",
  });
};
