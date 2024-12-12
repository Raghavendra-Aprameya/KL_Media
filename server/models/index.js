const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log("ERROR" + err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require("./adminModel.js")(sequelize, DataTypes);
db.users = require("./usersModel.js")(sequelize, DataTypes);
db.shows = require("./showModel.js")(sequelize, DataTypes);
db.bookings = require("./bookingModel.js")(sequelize, DataTypes);
db.logbook = require("./logBook.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes resync success");
});
db.users.hasMany(db.bookings, {
  foreignKey: "userId",
  as: "userBookings",
});
db.bookings.belongsTo(db.users, {
  foreignKey: "userId",
  as: "userBookingInfo",
});
db.shows.hasMany(db.bookings, {
  foreignKey: "showId",
  as: "showBookings",
});
db.bookings.belongsTo(db.shows, {
  foreignKey: "showId",
  as: "showBookingInfo",
});
async function createTriggerIfNeeded() {
  try {
    // Check if the trigger already exists
    cseFaculty = db.cseFaculty;
    logBook = db.logBook;
    const [triggers] = await sequelize.query(`SHOW TRIGGERS`);
    if (triggers.length === 0) {
      // Trigger doesn't exist, create it
      await sequelize.query(`
      CREATE TRIGGER user_log AFTER INSERT ON users
      FOR EACH ROW
      BEGIN
          INSERT INTO logbooks (userId,name,createdAt) VALUES (NEW.userid,NEW.name,NOW());
      END;`);
      console.log("Trigger created successfully.");
    } else {
      console.log("Trigger already exists, skipping creation.");
    }
  } catch (error) {
    console.error("Error creating trigger:", error);
  }
}

createTriggerIfNeeded();

module.exports = db;
