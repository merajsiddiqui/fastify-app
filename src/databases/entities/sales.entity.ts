import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("sales_report")
export class SalesEntity {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 20})
    userName: string

    @Column({type: "float", nullable: true, default: 0})
    amount: number

    @CreateDateColumn()
    date: Date
}