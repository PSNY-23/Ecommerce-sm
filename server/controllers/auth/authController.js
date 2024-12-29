import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//register

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    const user = await User.findOne({
      email
    });
    if (user) return res.status(400).json({ msg: "The email already exists" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters" });
      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    // Save mongodb
      await newUser.save();
      res.status(200).json({success:"true", message: "Sign up success" });
  } catch (err) {
    return res
      .status(500)
      .json({ success:"false", message: "error registering user", error: err.message });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });
    // If login success , create token
    const payload = { id: user._id, username: user.username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    res.statu(200).json({success:'true', token });
  } catch (error) {
    return res.status(500).json({success:'false',message: error.message });
  }
};

//logout
const logoutUser = async (req, res) => {};

//forgot password
const forgotPassword = async (req, res) => {};

//auth middleware
const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Invalid Authentication" });
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Authorization not valid" });
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//export
export { registerUser, loginUser, logoutUser, forgotPassword };
