import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import ApiInstance from "../../apis/config";
import { ApiEndpoints } from "../../apis/endpoints";
import { getUser } from "../../helpers/user.helper";
import "./Booking.css";

const Booking = () => {
  const [place, setPlace] = useState(null);
  const { state } = useLocation();
  const { id, fromDate, toDate } = state || {};

  const firstDate = moment(fromDate, "DD-MM-YYYY");
  const lastDate = moment(toDate, "DD-MM-YYYY");
  const totalDays = moment.duration(lastDate.diff(firstDate)).asDays() + 1;

  const [totalAmount, setTotalAmount] = useState(0);
  const currentUser = getUser();

  const fetchPlace = useCallback(async () => {
    try {
      const { data } = await ApiInstance.get(ApiEndpoints.getPlaceById(id));
      console.log("data", data);
      setPlace(data);
      setTotalAmount(data.rentperday * totalDays);
    } catch (error) {
      console.error("Error fetching place:", error);
    }
  }, [id, totalDays]);

  useEffect(() => {
    fetchPlace();
  }, []);

  const handlePayment = useCallback(async (token) => {
    console.log("token", token);
    try {
      const bookingDetails = {
        places: place,
        userid: currentUser._id,
        fromDate,
        toDate,
        totalAmount,
        totalDays,
        token,
      };

      await ApiInstance.post(ApiEndpoints.bookPlace(), bookingDetails);

      toast
        .success({
          icon: "success",
          title: "Booking Confirmed!",
          text: "Your room has been booked successfully",
        })
        .then(() => {
          window.location.href = "/profile";
        });
    } catch (error) {
      toast.success({
        icon: "error",
        title: "Booking Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  }, []);

  if (!place) return null;

  return (
    <div className="booking-container">
      <div className="booking-card">
        <div className="booking-header">
          <h1>Booking Summary</h1>
          <span className="booking-status">Pending Confirmation</span>
        </div>

        <div className="booking-body">
          <div className="booking-image">
            <img src={place.imageurls[0]} alt={place.name} loading="lazy" />
          </div>

          <div className="details-grid">
            <section className="detail-section">
              <h2>Place Details</h2>
              <div className="detail-item">
                <span>Place Name</span>
                <strong>{place.name}</strong>
              </div>
              <div className="detail-item">
                <span>Max Guests</span>
                <strong>{place.maxcount}</strong>
              </div>
            </section>

            <section className="detail-section">
              <h2>Guest Information</h2>
              <div className="detail-item">
                <span>Guest Name</span>
                <strong>{currentUser.name}</strong>
              </div>
              <div className="detail-item">
                <span>Check In</span>
                <strong>{fromDate}</strong>
              </div>
              <div className="detail-item">
                <span>Check Out</span>
                <strong>{toDate}</strong>
              </div>
            </section>

            <section className="detail-section price-summary">
              <h2>Price Details</h2>
              <div className="detail-item">
                <span>Duration</span>
                <strong>{totalDays} days</strong>
              </div>
              <div className="detail-item">
                <span>Rate per day</span>
                <strong>₹{place.rentperday}</strong>
              </div>
              <div className="detail-item total">
                <span>Total Amount</span>
                <strong>₹{totalAmount}</strong>
              </div>
            </section>
          </div>

          <div className="payment-section">
            <StripeCheckout
              amount={totalAmount * 100}
              token={handlePayment}
              currency="INR"
              stripeKey={process.env.STRIPE_KEY}
            >
              <button className="payment-button">
                <span>Proceed to Payment</span>
                <span className="amount">₹{totalAmount}</span>
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
