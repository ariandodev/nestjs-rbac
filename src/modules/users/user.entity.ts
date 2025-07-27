// This file defines a User entity for the TypeORM.
// It's like defining a schema for a user table in a database, but in TypeORM style.
// TypeORM automatically creates or update table in the database 
// based on this entity when synchronize is set to true.

// This table is used to manage user data

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User_To_Role } from '../roles/user_to_role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => User_To_Role, userToRole => userToRole.user)
  roles: User_To_Role[];
}