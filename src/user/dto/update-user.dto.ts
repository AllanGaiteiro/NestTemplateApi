import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
    required: false,
  })
  email?: string;
}
