import { VerifyToken } from "../helpers/helpers.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const headers = req.header("Authorization");
    if (!headers)
      return res.status(404).json({ message: "Headers not found!!!" });

    const token = headers.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Token not found" });

    const verifiedUser = VerifyToken(token);
    if (!verifiedUser)
      return res.status(403).json({ message: "Failed to verify token" });

    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(500).json({ message: "Error while authentication", error });
  }
};

export const isAdmin = (req, res, next) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.json({ message: "Only admin can perform this task" });
  }
  next();
};

export const validation = (schema) => {
  return async (req, res, next) => {
    const data = req.body;
    try {
      await schema.parse(data);
      next();
    } catch (error) {
      return res.json({ message: "error while validating fields", error });
    }
  };
};
