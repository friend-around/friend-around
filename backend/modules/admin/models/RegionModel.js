module.exports = function ( Model ) {
    return Model.extend( "Region",
    {
        type: 'ORM',
        softDeletable: false,
        timeStampable: false
    },
    {
        id_region: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
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