import Contact from "../models/contacts.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addContact = async (req, res) => {
  try {
    const contactData = req.body;
    const newContact = new Contact({ ...contactData });
    await newContact.save();
    res.json({ message: "Contact added successfully.", data: newContact });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(400).json({ error: "Failed to add contact." });
  }
};
