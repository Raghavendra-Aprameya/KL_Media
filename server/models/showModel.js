module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define(
    "show",
    {
      showid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      showname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      showgenre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      showinfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      showdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      showvenue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venueaddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      showcap: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticketrem: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      posterurl: {
        type: DataTypes.STRING,
      },
    },

    {
      timestamps: false,
      hooks: {
        beforeCreate: (instance, options) => {
          console.log("Before create hook triggered.");
          console.log("Showcap:", instance.showcap); // Check the value of showcap
          console.log("Ticketrem (before addition):", instance.ticketrem); // Check the value of ticketrem before addition

          // Add showcap value to ticketrem only during creation
          instance.ticketrem += instance.showcap;

          console.log("Ticketrem (after addition):", instance.ticketrem);
        },
      },
    }
  );
  return Show;
};
