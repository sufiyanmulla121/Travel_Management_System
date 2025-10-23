import Place from "../models/places.js";

export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find({});
    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getPlaceById = async (req, res) => {
  const id = req.params.id;
  try {
    const place = await Place.findOne({ _id: id });
    res.send(place);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getPlaceByIdFood = async (req, res) => {
  const placesid = req.body.placesid;

  try {
    const place = await Place.findOne({ _id: placesid });
    res.send(place);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addRoom = async (req, res) => {
  try {
    const newRoom = new Place(req.body);
    await newRoom.save();
    res.send("New Room Added Successfully !");
  } catch (error) {
    console.error("Error adding room:", error);
    res.status(400).json({ error: "Failed to add room." });
  }
};
