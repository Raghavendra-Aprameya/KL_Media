module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("booking", {
        bookingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        numTicket: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        showDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        initialAutoIncrement: 1
    })
    return Booking

}