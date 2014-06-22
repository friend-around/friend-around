var Module = require( 'classes' ).Module;

module.exports = Module.extend({
    preSetup: function() {
        console.log( 'Hello, this module is about to be setup by the moduleLoader' )
    }
});