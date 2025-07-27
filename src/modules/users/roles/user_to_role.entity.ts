// This table is used to join users and roles tables, also known as a junction table.

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user.entity';
import { Role } from './role.entity';

@Entity()
export class User_To_Role {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.roles)
  user: User;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}