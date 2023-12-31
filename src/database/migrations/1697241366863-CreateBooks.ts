import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateBooks1697241366863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"books",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"title",
                        type:"varchar"
                    },
                    {
                        name:"year",
                        type:"varchar"
                    },
                    {
                        name:"edition",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }

}
