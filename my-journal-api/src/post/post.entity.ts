import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

   @Column({ nullable: true })
  userId: number;

  @Column()
  content: string;
  @CreateDateColumn({ type: 'integer' })
  createdAt: Date;
}