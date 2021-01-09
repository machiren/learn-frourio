/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[provider,providerId]` on the table `users`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[email,provider]` on the table `users`. If there are existing duplicate values, the migration will fail.
  - Added the required column `provider` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN     `pictureUrl` VARCHAR(191),
    ADD COLUMN     `provider` VARCHAR(191) NOT NULL,
    ADD COLUMN     `providerId` VARCHAR(191),
    MODIFY `email` VARCHAR(191),
    MODIFY `password` VARCHAR(191);

-- CreateIndex
CREATE UNIQUE INDEX `users.provider_providerId_unique` ON `users`(`provider`, `providerId`);

-- CreateIndex
CREATE UNIQUE INDEX `users.email_provider_unique` ON `users`(`email`, `provider`);
