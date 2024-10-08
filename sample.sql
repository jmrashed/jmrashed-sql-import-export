-- Create a new database
CREATE DATABASE IF NOT EXISTS sample_db;

-- Use the created database
USE sample_db;

-- Create a users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample records into the users table
INSERT INTO users (username, email, password) VALUES
('john_doe', 'john@example.com', 'hashed_password_1'),
('jane_smith', 'jane@example.com', 'hashed_password_2'),
('alice_jones', 'alice@example.com', 'hashed_password_3'),
('bob_brown', 'bob@example.com', 'hashed_password_4');

-- Query to select all users
SELECT * FROM users;
