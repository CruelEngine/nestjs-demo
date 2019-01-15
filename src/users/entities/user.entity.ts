import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, name: 'user_name' })
  name: string;

  @Column({ name: 'user_password' })
  password: string;

  @Column({ name: 'created_time', type: Date })
  createdTime: Date;
}
