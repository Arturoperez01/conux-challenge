// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Skaff_db/UserModel";
import PaginasPaScrapeModel from "../models/Skaff_db/PaginasPaScrapeModel";
import WeasModel from "../models/Skaff_db/WeasModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.skaff_db_dbUrl);

    // Start Init Models

		UserModel.init();
		PaginasPaScrapeModel.init();
		WeasModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_skaff_db = await mongoose.connect(
        "mongodb://" + properties.skaff_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_skaff_db;
  }
}

export default new Database();
