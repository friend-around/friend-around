module.exports = function( Controller, CityService ) {
    return Controller.extend(
    /** @Class **/
    {
        service: CityService
    },
    /** @Prototype **/
    {
        getAction: function () {
            if ( !!this.req.params.id ) {
                CityService.find( this.req.params.id )
                    .then( this.proxy( 'handleServiceMessage' ) )
                    .catch( this.proxy( 'handleException' ) );
            } else {
                this.listAction();
            }
        }
    });
}