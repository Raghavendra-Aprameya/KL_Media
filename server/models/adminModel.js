module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admin", {
        adminId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phno: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        }

    }, {
        timestamps: false,
        initialAutoIncrement: 1000
    })
    return Admin

}