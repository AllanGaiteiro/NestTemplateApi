// Importações necessárias
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// Entidade User
@Entity('users')
export class User {
  @ApiProperty({ description: 'ID único do usuário', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nome do usuário', example: 'João Silva' })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
  })
  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;
}
