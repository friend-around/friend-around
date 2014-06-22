module.exports = function( Service, RegionModel ) {
    return Service.extend({
        model: RegionModel
    });
}