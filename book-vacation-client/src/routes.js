export const apiRoutes = {
  property: {
    getAll: () => "http://localhost:3001/property",
    getPropertyById: (id) => `http://localhost:3001/property/${id}`,
  },
  user: {
    createUserRoute: () => "http://localhost:3001/user/create-user",
    editUserRoute: (id) => `http://localhost:3001/user/edit-user/${id}`,
    deleteUserRoute: (id) => `http://localhost:3001/user/delete-user/${id}`,
  },
};
