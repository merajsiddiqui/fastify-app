import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SalesEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @Column()
    amount: number

    @Column()
    date: string
}