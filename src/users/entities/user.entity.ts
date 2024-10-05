import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email:string

    @Column()
    username:string

    @Column()
    password:string

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    delete_at: Date;
}
