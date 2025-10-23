import {
  ComparePassword,
  CreateToken,
  HashedPassword,
} from "../helpers/helpers.js";
import User from "../models/user.js";
import { sequelize } from "../db/index.js";
import { userConstants } from "../constants/user.constants.js";

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } })

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const hashedPassword = await HashedPassword(password);

    const newUser = await User.create({
      name, email, password: hashedPassword, role: role || "user"
    });

    return res.status(201).json({
      message: "User registered successfully",
      newUser
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to save user", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } })

    if (!user)
      return res.status(404).json({ message: "Email not found" });

    const validPassword = await ComparePassword(password, user.password);

    if (!validPassword)
      return res.status(401).json({ message: "Invalid Password" });

    const payload = { id: user.id, user: user.name, email: user.email };
    const token = await CreateToken(payload);

    if (!token)
      return res.status(500).json({ message: "Failed to create token" });

    return res.status(200).json({ message: "LoggedIn Successfully ", data: user, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.status(200).json({
      status: 200,
      message: "Successfully fetched all users",
      data: users.length ? users : "no users added",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
