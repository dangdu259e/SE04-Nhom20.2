-- MySQL Script generated by MySQL Workbench
-- Tue Dec 15 22:15:03 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` VARCHAR(10) NOT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `add` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cart` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cart` (
  `id` VARCHAR(16) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `user_id` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`payment` ;

CREATE TABLE IF NOT EXISTS `mydb`.`payment` (
  `id` VARCHAR(10) NOT NULL,
  `purchase_date` DATE NULL,
  `total_cost` INT NULL,
  `cart_id` VARCHAR(16) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_payment_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_payment_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `mydb`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`admin` ;

CREATE TABLE IF NOT EXISTS `mydb`.`admin` (
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`email`));


-- -----------------------------------------------------
-- Table `mydb`.`cat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cat` (
  `id` VARCHAR(10) NOT NULL,
  `name` VARCHAR(45) NULL,
  `gender` INT(1) NULL,
  `origin` VARCHAR(10) NULL,
  `type` VARCHAR(10) NULL,
  `price` VARCHAR(45) NULL,
  `particular_trait` VARCHAR(45) NULL,
  `quantity` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`cart_has_cat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cart_has_cat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cart_has_cat` (
  `cart_id` VARCHAR(16) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `cat_id` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`cart_id`, `cat_id`),
  INDEX `fk_cart_has_cat_cat1_idx` (`cat_id` ASC) VISIBLE,
  INDEX `fk_cart_has_cat_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_has_cat_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `mydb`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_has_cat_cat1`
    FOREIGN KEY (`cat_id`)
    REFERENCES `mydb`.`cat` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
