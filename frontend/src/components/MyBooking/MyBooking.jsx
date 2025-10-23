import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiInstance from "../../apis/config";
import { ApiEndpoints } from "../../apis/endpoints";
import { getUser } from "../../helpers/user.helper";
import BookingCard from "../BookingCard/BookingCard";

const MyBookings = () => {
  const user = getUser();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = useCallback(async () => {
    try {
      const { data } = await ApiInstance.get(ApiEndpoints.getBooking(user._id));
      setBookings(data);
    } catch (error) {
      toast.error("Failed to fetch bookings");
      throw new Error(error);
    }
  }, []);

  return (
    <div>
      {bookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default MyBookings;
