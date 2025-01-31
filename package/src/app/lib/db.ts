// Create a connection to the database
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '@Olawale120',
  database: 'identificationDb'
};

export default dbConfig;

/* CREATE TABLE `identificationDb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `middleName` VARCHAR(45) NULL,
  `dateOfBirth` VARCHAR(45) NOT NULL,
  `branch` VARCHAR(45) NULL,
  `plateNumber` VARCHAR(45) NULL,
  `emergencyFullName` VARCHAR(45) NULL,
  `emergencyPhone` VARCHAR(45) NULL,
  `emergencyAddress` VARCHAR(200) NULL,
  `unit` VARCHAR(45) NULL,
  `unionName` VARCHAR(45) NULL,
  `ninBvn` VARCHAR(45) NULL,
  `address` VARCHAR(200) NULL,
  `image` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE); */