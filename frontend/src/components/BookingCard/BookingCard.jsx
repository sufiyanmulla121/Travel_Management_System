import React from "react";
import "./BookingCard.css";

const BookingCard = React.memo(({ booking }) => (
  <div className="booking-card">
    <h3 className="booking-title">{booking.places}</h3>
    <div className="booking-info">
      <span className="booking-label">Booking ID:</span>
      <span>{booking._id}</span>
    </div>
    <div className="booking-info">
      <span className="booking-label">Check In:</span>
      <span>{booking.fromDate}</span>
    </div>
    <div className="booking-info">
      <span className="booking-label">Check Out:</span>
      <span>{booking.toDate}</span>
    </div>
    <div className="booking-info">
      <span className="booking-label">Amount:</span>
      <span>${booking.totalAmount}</span>
    </div>
    <div className="booking-info">
      <span className="booking-label">Status:</span>
      <span
        className={`status-tag ${
          booking.status === "cancelled"
            ? "status-cancelled"
            : "status-confirmed"
        }`}
      >
        {booking.status === "cancelled" ? "Cancelled" : "Confirmed"}
      </span>
    </div>
  </div>
));

export default BookingCard;
