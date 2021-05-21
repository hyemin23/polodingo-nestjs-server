import { Wish } from './../../wish/entities/wish.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Wish, (wish) => wish.product)
  wish!: Wish;

  @Column()
  productName: string;

  @Column()
  productColor: string;

  @Column()
  productSize: string;
  @Column()
  procutRsize: string;
  @Column()
  productMsize: string;
  @Column()
  productMaterial: string;
  @Column()
  procutLogoColor: string;
  @Column()
  productPrice: number;

  //기본값설정
  @Column({ default: 1 })
  productCount: number;
}
