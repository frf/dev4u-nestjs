import {MigrationInterface, QueryRunner} from "typeorm";

export class User1598194675942 implements MigrationInterface {
    name = 'User1598194675942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `name` varchar(191) NOT NULL, `email` varchar(191) NOT NULL, `password` varchar(191) NOT NULL, `facebook_id` varchar(191) NULL, `avatar` varchar(191) NULL, `last_login` datetime NULL, `email_verified_at` datetime NULL, `status` int NOT NULL DEFAULT '1', `type` int NULL, `telefone` varchar(191) NULL, `country` varchar(191) NULL, `sexo` varchar(191) NULL, `logradouro` varchar(191) NULL, `nascimento` date NULL, `remember_token` varchar(100) NULL, `deleted_at` timestamp NULL, `created_at` timestamp NULL, `updated_at` timestamp NULL, UNIQUE INDEX `users_email_unique` (`email`), UNIQUE INDEX `users_uuid_unique` (`uuid`), UNIQUE INDEX `IDX_951b8f1dfc94ac1d0301a14b7e` (`uuid`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_951b8f1dfc94ac1d0301a14b7e` ON `users`");
        await queryRunner.query("DROP INDEX `users_uuid_unique` ON `users`");
        await queryRunner.query("DROP INDEX `users_email_unique` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
