import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
        AuthModule, 
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get('TYPEORM_HOST'),
            port: +configService.get<number>('TYPEORM_PORT'),
            username: configService.get('TYPEORM_USERNAME'),
            password: configService.get('TYPEORM_PASSWORD'),
            database: configService.get('TYPEORM_DATABASE'),
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: false,
            migrations: ['dist/**/*.migration{.ts,.js}'],
            migrationsRun: true,
            logging: true
          }),
          inject: [ConfigService],
        }),
        UsersModule, 
      ],
})
export class AppModule {
}