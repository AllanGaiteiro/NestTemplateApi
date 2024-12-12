import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppDataSource } from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)]
  ,controllers:[AppController]
})
export class AppModule {}
