const PropertyModel = require("../models/Property");
 const distructObj = (body) => {
    return {
        name: body.propertyName?.toLowerCase(),
        description: body.propertyDescription?.toLowerCase(),
        address: body.address?.toLowerCase(),
        city: body.city?.toLowerCase(),
        state: body.state?.toLowerCase(),
        country: body.country?.toLowerCase(),
        zipCode: body.zipCode?.toLowerCase(),
        propertyType: body.propertyType?.toLowerCase(),
        guests: body.guests,
        bedrooms: body.bedrooms,
        noOfBeds: body.noOfBeds,
        bathrooms: body.bathrooms,
        amenities: body.amenities,
        pricePerNight: body.pricePerNight,
        image: body.images,       
    }
}

module.exports = {distructObj}