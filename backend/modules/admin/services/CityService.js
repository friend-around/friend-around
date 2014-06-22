module.exports = function( Service, CityModel ) {
    return Service.extend({
        model: CityModel
    });
}