import { Controller, Get } from '@nestjs/common';
import { responseHealthStatus } from './common/health-status/responseHealthStatus';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {

  @Get()
  @ApiOperation({ summary: 'Verifica se a API está funcionando' })
  @ApiResponse({ status: 200, description: 'API está rodando' })
 
  getHealthStatus(): object {
    return responseHealthStatus;
  }
}
