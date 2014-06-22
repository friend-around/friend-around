module.exports = function( Service, AdminModel ) {
    return Service.extend({
        model: AdminModel
    });
}