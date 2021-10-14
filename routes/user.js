const router = require("express").Router();

const userController = require("../controllers/user");

router.get("/add-user", userController.getAddUser);
router.post("/add-user", userController.postUser);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUser);

router.get("/edit-user/:userId", userController.getPutUser);
router.post("/edit-user", userController.putUser);

router.post("/delete-user/:userId", userController.deleteUser);

module.exports = router;
