export const apiRoutes = {
    property: {
        getAll: () => ("http://localhost:3001/property"),
        getPropertyById: (id) => (`http://localhost:3001/property/${id}`)
    }
}