import { DataTypes, Model } from "@sequelize/core";
import sequelize from "../db/index.js";

class Contact extends Model { }

Contact.init(
  {
    cname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cphonenumber: {
      type: DataTypes.STRING, // store as string (supports +, leading 0s)
      allowNull: false,
    },
    ctype1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctype2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cimageurls: {
      type: DataTypes.JSON, // array of image URLs
      allowNull: true,
    },
    cemail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    clink1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clink2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clink3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clink4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "contact",
    timestamps: true,
  }
);

export default Contact;
