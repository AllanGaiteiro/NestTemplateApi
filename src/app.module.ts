import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'ormconfig';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), HealthCheckModule],
})
export class AppModule {}
