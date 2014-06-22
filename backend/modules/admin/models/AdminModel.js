module.exports = function ( Model ) {
    return Model.extend( "Admin",
    {
        type: 'ORM',
        softDeletable: true,
        timeStampable: true
    },
    {
        id: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        name: String
    });
};