/*
  Warnings:

  - Added the required column `userId` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` ADD COLUMN     `userId` INT NOT NULL;

-- AddForeignKey
ALTER TABLE `articles` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
