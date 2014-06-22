module.exports = function( Controller, AdminService ) {
    return Controller.extend(
    /** @Class **/
    {
        service: AdminService
    },
    /** @Prototype **/
    {
        helloAction: function() {
            this.send({
                message: 'Hi there'
            })
        }
    });
}