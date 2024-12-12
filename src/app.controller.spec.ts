import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { responseHealthStatus } from './common/health-status/responseHealthStatus';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "API is running!"', () => {
      expect(appController.getHealthStatus()).toBe(responseHealthStatus);
    });
  });
});
