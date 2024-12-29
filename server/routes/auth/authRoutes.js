import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} from "../../controllers/auth/authController.js";

const router = Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Logout route
router.post("/logout", logoutUser);

// Forgot password route
router.post("/forgotpassword", forgotPassword);

export default router;
