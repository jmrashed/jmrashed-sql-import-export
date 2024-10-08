#!/usr/bin/env node

const { Command } = require("commander");
const { importSQL, exportSQL } = require("./lib/sqlManager"); // Adjust according to your actual implementation

const program = new Command();

program
  .command("import <file>")
  .description("Import SQL file into MySQL database")
  .action((file) => {
    importSQL(file)
      .then(() => console.log("Import completed successfully!"))
      .catch((error) => console.error("Import failed:", error.message));
  });

program
  .command("export <file>")
  .description("Export MySQL database to SQL file")
  .action((file) => {
    exportSQL(file)
      .then(() => console.log("Export completed successfully!"))
      .catch((error) => console.error("Export failed:", error.message));
  });

program.parse(process.argv);
