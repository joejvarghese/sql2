const sql = require("mssql");
const config = require("../config");

let pool = new sql.ConnectionPool(config.DB_CONFIG)

async function connectToSqlServer() {
  try {
     await pool.connect();
     console.log("Database Connection Established"); 
  } catch (err) {
    console.error("Error connecting to SQL Server:", err);
    if (err.originalError) {
      console.error("Detailed error information:", err.originalError);
    }
  }
}

module.exports = {connectToSqlServer, pool};
