// This file defines a Permission entity for the TypeORM.
// It's like defining a schema for a permission table in a database, but in TypeORM style.
// TypeORM automatically creates or update table in the database 
// based on this entity when synchronize is set to true.

// This table is used to manage roles data

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Permission_To_Role } from './permission_to_role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Permission_To_Role, permissionToRole => permissionToRole.permission)
  roles: Permission_To_Role[];
}