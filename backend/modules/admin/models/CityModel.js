module.exports = function ( Model ) {
    return Model.extend( "City",
    {
        type: 'ORM',
        softDeletable: false,
        timeStampable: false
    },
    {
        id_city: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        id_region: {
            type: Number
        },
        name: {
            type: String,
            required: true
        },
        keywords: {
            type: String
        },
        description: {
            type: String
        }
    });
};