import Location from "../models/locations.js";


export const getLocation = async (req, res) => {
  try {
    const locations = await Location.findAll(); // fetch all locations
    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations,
    });
  } catch (error) {
    console.error("Error fetching locations:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch locations",
      error: error.message,
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Location.find();
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addLocation = async (req, res) => {
  try {
    const newLocation = await Location.create(req.body);
    res.status(201).json({
      message: "New Location Added Successfully!",
      location: newLocation
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};