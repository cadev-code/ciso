CREATE DATABASE IF NOT EXISTS ciso;

USE ciso;

CREATE TABLE users(
  `id` INT AUTO_INCREMENT,
  `full_name` VARCHAR(100) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `password_token` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE sites(
  `id` INT AUTO_INCREMENT,
  `site` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE certifications(
  `id` INT AUTO_INCREMENT,
  `certification` VARCHAR(100) NOT NULL,
  `site_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`site_id`) REFERENCES sites(`id`)
);

CREATE TABLE areas(
  `id` INT AUTO_INCREMENT,
  `area` VARCHAR(100) NOT NULL,
  `certification_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`certification_id`) REFERENCES certifications(`id`)
);

CREATE TABLE documents(
  `id` INT AUTO_INCREMENT,
  `document` VARCHAR(100) NOT NULL,
  `code` VARCHAR(50) NOT NULL,
  `version` VARCHAR(20) NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `area_id` INT NOT NULL,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`area_id`) REFERENCES areas(`id`)
);

CREATE TABLE evidences(
  `id` INT AUTO_INCREMENT,
  `document` VARCHAR(100) NOT NULL,
  `code` VARCHAR(50) NOT NULL,
  `version` VARCHAR(20) NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `document_id` INT NOT NULL,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`document_id`) REFERENCES documents(`id`)
);

CREATE TABLE user_site_permissions(
  `id` INT AUTO_INCREMENT,
  `user_id` INT,
  `site_id` INT,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`user_id`) REFERENCES users(`id`),
  FOREIGN KEY (`site_id`) REFERENCES sites(`id`)
);

CREATE TABLE user_certification_permissions(
  `id` INT AUTO_INCREMENT,
  `user_id` INT,
  `certification_id` INT,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`user_id`) REFERENCES users(`id`),
  FOREIGN KEY (`certification_id`) REFERENCES certifications(`id`)
);

CREATE TABLE user_area_permissions(
  `id` INT AUTO_INCREMENT,
  `user_id` INT,
  `area_id` INT,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`user_id`) REFERENCES users(`id`),
  FOREIGN KEY (`area_id`) REFERENCES areas(`id`)
);
