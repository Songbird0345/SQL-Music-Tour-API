// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require("sequelize"); // import
const sequelize = new Sequelize(process.env.PG_URI); // connect at this location

// MODEL
class Band extends Model {}

// For Band.init()...
// The 1st argument specifies columns and their data types.
// The 2nd argument is for extra table configuration.
Band.init(
  {
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Band",
    tableName: "band",
    timestamps: false,
  }
);

// EXPORT
module.exports = Band;
