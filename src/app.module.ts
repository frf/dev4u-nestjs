import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
        AuthModule, 
        TypeOrmModule.forRoot(), 
        UsersModule, 
      ],
})
export class AppModule {
}