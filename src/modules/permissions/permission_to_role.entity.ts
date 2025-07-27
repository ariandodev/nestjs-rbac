// This table is used to join role and permission tables, also known as a junction table.

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../roles/role.entity';
import { Permission } from './permission.entity';

@Entity()
export class Permission_To_Role {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Permission, (permission) => permission.roles)
  permission: Permission;

  @ManyToOne(() => Role, (role) => role.permissions)
  role: Role;
}