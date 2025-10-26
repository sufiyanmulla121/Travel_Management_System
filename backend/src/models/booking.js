import { DataTypes, Model } from "@sequelize/core";
import sequelize from "../db/index.js";

class Booking extends Model { }

Booking.init(
  {
    bookingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    places: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    placesid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fromDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "booked",
    },
  },
  {
    sequelize,
    modelName: "Booking",
    timestamps: true,
  }
);

export default Booking;
