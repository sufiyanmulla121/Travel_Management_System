export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const ApiEndpoints = {
  //auth
  login: () => `/api/users/login`,
  register: () => `/api/users/register`,

  //contacts
  getContacts: () => `/api/contacts/getContacts`,

  //locations
  getLocations: () => `/api/location/getLocations`,

  //places
  getPlaces: () => `/api/place/getallplaces`,
  getPlaceById: (id) => `/api/place/getPlaceById/${id}`,

  //booking
  bookPlace: () => `/api/booking/bookplace`,
  getBooking: (id) => `/api/booking/getBookingsByUserId/${id}`,
};
