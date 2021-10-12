const router = require("express").Router();

const userController = require("../controllers/user");

router.post("/", userController.postUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
