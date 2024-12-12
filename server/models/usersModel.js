module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phno: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      initialAutoIncrement: 10,
    }
  );
  return User;
};
