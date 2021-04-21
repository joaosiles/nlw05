/**
 * Arquivo criado com o comando  yarn typeorm migration:create -n CreateSettings que pega configs dos
 * arquivos ormconfig.json e package.json
 */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619031264709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /**
         * up vai ser executado quando rodar yarn typeorm migration:run
         */
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /**
         * down serve pra reverter e vai ser executado quando rodar yarn typeorm migration:revert
         */
        await queryRunner.dropTable("settings");
    }

}
