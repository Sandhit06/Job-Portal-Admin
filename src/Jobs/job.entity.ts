import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    companyName: string;

    @Column()
    location: string;

    @Column()
    jobType: string;

    @Column('int')
    salaryMin: number;

    @Column('int')
    salaryMax: number;

    @Column({ nullable: true })
    applicationDeadline: string;

    @Column('text')
    description: string;
}
