export const apiRoutes = {
  property: {
    getAllProperties: () => "http://localhost:3001/property",
    getPropertyById: (id) => `http://localhost:3001/property/${id}`,
    createPropertyRoute: () => "http://localhost:3001/property/create-property",
    editPropertyRoute: () => "http://localhost:3001/property/edit-property",
    deletePropertyRoute: (id) => `http://localhost:3001/property/delete-property/${id}`,
    bookPropertyRoute: (property) => "http://localhost:3001/property/book-property"
  },
  user: {
    createUserRoute: () => "http://localhost:3001/user/create-user",
    loginUserRoute: () => "http://localhost:3001/user/login-user",
    getUserProperties: (id) => `http://localhost:3001/user/${id}/properties`,
    createUserBookings: () => "http://localhost:3001/user/book-property",
    getUserBookings: () => "http://localhost:3001/user/get-user-bookings",
    editUserRoute: (id) => `http://localhost:3001/user/edit-user/${id}`,
    deleteUserRoute: (id) => `http://localhost:3001/user/delete-user/${id}`,
  },
};
