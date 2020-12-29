/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE `Task` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `tasks`;
