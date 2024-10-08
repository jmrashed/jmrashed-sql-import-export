const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

class SqlManager {
  constructor(config) {
    this.config = config;
    this.connection = null;
  }

  async connect() {
    this.connection = await mysql.createConnection(this.config);
  }

  async close() {
    if (this.connection) {
      await this.connection.end();
    }
  }

  async importSQL(file) {
    const sql = fs.readFileSync(file, "utf8");
    await this.connection.query(sql);
    return "SQL file imported successfully.";
  }

  scheduleDailyExport(backupDir) {
    cron.schedule("0 0 * * *", async () => {
      const exportFilePath = path.join(
        backupDir,
        `backup_${new Date().toISOString().slice(0, 10)}.sql`
      );
      const [rows] = await this.connection.query("SHOW TABLES");
      const tables = rows.map((row) => Object.values(row)[0]);
      const exports = [];

      for (const table of tables) {
        const [data] = await this.connection.query(`SELECT * FROM ${table}`);
        exports.push(`-- Dumping table: ${table}\n`);
        exports.push(
          `INSERT INTO ${table} VALUES ${data
            .map(
              (row) =>
                `(${Object.values(row)
                  .map((v) => `'${v}'`)
                  .join(",")})`
            )
            .join(",")};\n\n`
        );
      }

      fs.writeFileSync(exportFilePath, exports.join(""));
      console.log(`Database exported successfully to ${exportFilePath}`);
    });
  }
}

module.exports = SqlManager;
