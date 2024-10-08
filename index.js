const SqlManager = require("./lib/sqlManager");

const config = {
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database",
};

const sqlManager = new SqlManager(config);

async function main() {
  try {
    await sqlManager.connect();
    await sqlManager.importSQL("path/to/your/file.sql"); // Replace with your SQL file path
    sqlManager.scheduleDailyExport("path/to/backup/directory"); // Replace with your backup directory
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
