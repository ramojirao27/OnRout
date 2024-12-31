const {createUser,loginUser,getUserById,updateUser,deleteUser,addReviewToUser} = require("../controller/userController");
const { Router } = require("express");
const router = Router();

router.post("/signup",createUser);
router.post("/login",loginUser);
router.post("/userbyid",getUserById);
router.post("/update",updateUser);
router.post("/delete",deleteUser);
router.post("/review",addReviewToUser);

module.exports = router;