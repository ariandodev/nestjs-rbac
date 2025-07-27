// This file defines a Resource entity for the TypeORM.
// It's like defining a schema for a resource table in a database, but in TypeORM style.
// TypeORM automatically creates or update table in the database 
// based on this entity when synchronize is set to true.

// This table is used to manage resources data
// Resources can be any entity that requires permissions, such as API endpoints, database tables, etc.

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Permission } from '../permissions/permission.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}