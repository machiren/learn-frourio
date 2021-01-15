-- CreateTable
CREATE TABLE `articles` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191),
    `content` VARCHAR(191),
    `pictureUrl` VARCHAR(191),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
