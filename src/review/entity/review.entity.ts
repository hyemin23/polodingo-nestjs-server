import { User } from './../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  reviewId: number;

  @OneToMany(() => User, (user) => user.id, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn([{ name: 'UserID', referencedColumnName: 'id' }])
  user: User;

  @Column()
  title: string;

  @Column()
  content: string;
}
