/*
  Warnings:

  - You are about to drop the column `deleted` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `deleted`,
    ADD COLUMN     `deletedAt` DATETIME(3);
