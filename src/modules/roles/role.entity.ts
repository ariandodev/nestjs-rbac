// This file defines a Role entity for the TypeORM.
// It's like defining a schema for a role table in a database, but in TypeORM style.
// TypeORM automatically creates or update table in the database 
// based on this entity when synchronize is set to true.

// This table is used to manage roles data

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User_To_Role } from './user_to_role.entity';
import { Permission_To_Role } from '../permissions/permission_to_role.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => User_To_Role, userToRole => userToRole.role)
  users: User_To_Role[];

  @OneToMany(() => Permission_To_Role, permissionToRole => permissionToRole.role)
  permissions: Permission_To_Role[];
}