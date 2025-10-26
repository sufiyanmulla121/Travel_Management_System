import { DataTypes, Model } from "@sequelize/core";
import sequelize from "../db/index.js";

class Place extends Model { }

Place.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxcount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.STRING, // use STRING to handle leading zeros or +
      allowNull: false,
    },
    rentperday: {
      type: DataTypes.DECIMAL(10, 2), // precise decimal for currency/rates
      allowNull: false,
    },
    imageurls: {
      type: DataTypes.JSON, // array of image URLs
      allowNull: true,
    },
    currentbookings: {
      type: DataTypes.JSON, // can store array or object
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    foodimgurls: {
      type: DataTypes.JSON, // array of image URLs for food
      allowNull: true,
    },
    foodname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodtype1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodtype2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodhealth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fooddescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "place",
    timestamps: true,
  }
);

export default Place;
