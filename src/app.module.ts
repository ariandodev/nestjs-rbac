import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/user.entity';
import { Role } from './modules/roles/role.entity';
import { User_To_Role } from './modules/roles/user_to_role.entity';
import { Permission } from './modules/permissions/permission.entity';
import { Permission_To_Role } from './modules/permissions/permission_to_role.entity';

@Module({
  imports: [
    // Import TypeORM module with MySQL configuration
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_rbac',
      entities: [User, Role, User_To_Role, Permission, Permission_To_Role],
      // Synchronize is used to automatically create or alter database tables based on our entities.
      // Be sure to set synchronize to false in production to avoid data loss.
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
