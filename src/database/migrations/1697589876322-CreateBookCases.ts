import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateBookCases1697589876322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name:"bookCases",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"numeration",
                        type:"varchar"
                    },
                    {
                        name:"stand",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("bookCases")
    }

}
