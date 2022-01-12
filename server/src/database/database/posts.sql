CREATE DATABASE IF NOT EXISTS posts;

USE posts;

CREATE TABLE IF NOT EXISTS post (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) DEFAULT NULL,
    content TEXT(100) DEFAULT NULL,
    created DATETIME DEFAULT NULL
);

DESCRIBE post;

INSERT INTO post value 
(NULL, "First title", "Second description", NOW()),
(NULL, "Second title", "Second description", NOW());

SELECT * FROM post;

DELETE FROM post WHERE id = 6;