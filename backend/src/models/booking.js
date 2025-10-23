import { Schema, model } from "mongoose";

const bookingSchema = Schema(
  {
    places: {
      type: String,
      required: true,
    },
    placesid: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: false,
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },
  {
    timestamps: true,
  },
);

const Booking = model("bookings", bookingSchema);

export default Booking;
