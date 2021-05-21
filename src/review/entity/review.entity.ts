import { User } from './../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, {
    cascade: ['insert', 'update'],
  })
  user: User;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  src: string;
}
