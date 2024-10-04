import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    quantity:number

    @Column({nullable: true})
    price:number

    @Column({nullable: true} )
    description: string

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;
}
