import * as dotenv from 'dotenv';
import { join } from 'path';
import { DataSource } from 'typeorm';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [join(__dirname, '**/*.entity.{ts,js}')], // Carrega as entidades de maneira dinâmica
    migrations: [join(__dirname, 'src/migrations/*.{ts,js}')], // Caminho para as migrações
    subscribers: [],
});
