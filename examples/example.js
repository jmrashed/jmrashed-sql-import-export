const SqlManager = require("../lib/sqlManager");

// Database configuration
const config = {
  host: "localhost", // Replace with your database host
  user: "your_username", // Replace with your database username
  password: "your_password", // Replace with your database password
  database: "your_database", // Replace with your database name
};

// Create an instance of SqlManager
const sqlManager = new SqlManager(config);

// Path to the SQL file you want to import
const sqlFilePath = "path/to/your/file.sql"; // Replace with your SQL file path

// Output path for daily exports
const backupDirectory = "path/to/backup/directory"; // Replace with your desired backup directory

async function main() {
  try {
    // Connect to the database
    await sqlManager.connect();
    console.log("Connected to the database.");

    // Import the SQL file
    const importResult = await sqlManager.importSQL(sqlFilePath);
    console.log(importResult);

    // Schedule daily exports
    sqlManager.scheduleDailyExport(backupDirectory);
    console.log("Daily export scheduled at midnight.");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the example
main();
