module.exports = function( Controller, RegionService ) {
    return Controller.extend(
    /** @Class **/
    {
        service: RegionService
    },
    /** @Prototype **/
    {
        getAction: function () {
            if ( !!this.req.params.id ) {
                RegionService.find( this.req.params.id )
                    .then( this.proxy( 'handleServiceMessage' ) )
                    .catch( this.proxy( 'handleException' ) );
            } else {
                this.listAction();
            }
        }
    });
}