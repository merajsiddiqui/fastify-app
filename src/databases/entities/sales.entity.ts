import {Column, Entity} from "typeorm";

@Entity()
class SalesEntity {

    @Column()
    Id: number

    @Column()
    userName: string

    @Column()
    amount: number

    @Column()
    date: string
}