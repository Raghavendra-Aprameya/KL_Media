module.exports = (sequelize, DataTypes) => {
  const LogBook = sequelize.define(
    "logbook",
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return LogBook;
};
