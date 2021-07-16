import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class SalesEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @Column()
    amount: number

    @Column()
    date: string
}