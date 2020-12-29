/*
  Warnings:

  - You are about to drop the column `label` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `done` on the `users` table. All the data in the column will be lost.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `label`,
    DROP COLUMN `done`,
    ADD COLUMN     `email` VARCHAR(191) NOT NULL,
    ADD COLUMN     `password` VARCHAR(191) NOT NULL,
    ADD COLUMN     `name` VARCHAR(191),
    ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN     `updatedAt` DATETIME(3) NOT NULL;
