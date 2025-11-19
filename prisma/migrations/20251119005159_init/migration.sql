-- CreateTable
CREATE TABLE `lampus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_lampu` ENUM('nyala', 'mati') NOT NULL DEFAULT 'mati',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
