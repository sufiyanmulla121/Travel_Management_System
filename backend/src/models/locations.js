import { DataTypes, Model } from "@sequelize/core";
import sequelize from "../db/index.js";

class Location extends Model { }

Location.init(
  {
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lreviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lphonenumber: {
      type: DataTypes.STRING, // phone numbers shouldn't be stored as numbers
      allowNull: false,
    },
    lrentperday: {
      type: DataTypes.DECIMAL(10, 2), // better for currency
      allowNull: false,
    },
    limageurls: {
      type: DataTypes.JSON, // store an array of URLs as JSON
      allowNull: true,
    },
    lcurrentbookings: {
      type: DataTypes.JSON, // also can be an array or object
      allowNull: true,
    },
    ltype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ldescription: {
      type: DataTypes.TEXT, // TEXT for longer descriptions
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "location",
    timestamps: true,
  }
);

export default Location;
