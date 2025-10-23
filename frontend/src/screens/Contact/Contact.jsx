import React, { useCallback, useEffect, useState } from "react";
import ApiInstance from "../../apis/config";
import { ApiEndpoints } from "../../apis/endpoints";
import Contacts from "../../components/Contact/Contacts";
import "./Contact.css";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = useCallback(async () => {
    try {
      const { data } = await ApiInstance.get(ApiEndpoints.getContacts());
      setContacts(data);
    } catch (error) {
      console.log("the error is", error);
    }
  }, []);
  return (
    <div className="contact-screen">
      <div className="contact-header">
        <h1>Contact Directory</h1>
      </div>

      <div className="contacts-grid">
        {contacts?.map((contact) => (
          <div className="contact-card-wrapper" key={contact._id}>
            <Contacts contacts={contact} />
          </div>
        ))}
      </div>

      {!contacts?.length && (
        <div className="no-contacts">
          <i className="far fa-address-book"></i>
          <p>No contacts found</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
