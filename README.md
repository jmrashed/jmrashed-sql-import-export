# jmrashed-sql-import-export

A command-line tool for importing large SQL files into a MySQL database and exporting the database daily. This package provides an easy way to manage your SQL operations directly from the command line.

## Features

- Import SQL files into your MySQL database.
- Schedule daily exports of the database.
- Simple command-line interface for ease of use.

## Installation

To install the package, run the following command:

```bash
npm install jmrashed-sql-import-export
```

## Usage

After installation, you can use the `sql-manager` command in your terminal.

### Importing SQL Files

To import an SQL file into your database, use the following command:

```bash
sql-manager import <path/to/your/file.sql>
```

**Example:**

```bash
sql-manager import path/to/your/file.sql
```

### Scheduling Daily Export

To schedule a daily export of your database, use the following command:

```bash
sql-manager export <path/to/backup/directory>
```

**Example:**

```bash
sql-manager export /path/to/backup/directory
```

This will schedule a daily export at midnight to the specified directory.

## Configuration

You need to configure your database connection settings in the `cli.js` file. Update the following section with your MySQL database credentials:

```javascript
// Database configuration
const config = {
    host: 'localhost', // Your database host
    user: 'your_username', // Your database username
    password: 'your_password', // Your database password
    database: 'your_database' // Your database name
};
```

## Requirements

- Node.js (v12 or later)
- MySQL database

## Dependencies

- [mysql2](https://www.npmjs.com/package/mysql2) - For connecting to the MySQL database.
- [commander](https://www.npmjs.com/package/commander) - For building the CLI.
- [node-cron](https://www.npmjs.com/package/node-cron) - For scheduling daily exports.
- [fs](https://nodejs.org/api/fs.html) - For file system operations.
- [path](https://nodejs.org/api/path.html) - For handling file paths.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any improvements or bug fixes.

## Contact

For any inquiries, please contact me at [jmrashed@gmail.com]. 