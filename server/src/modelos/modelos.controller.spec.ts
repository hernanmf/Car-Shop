import { Test, TestingModule } from '@nestjs/testing';
import { ModelosController } from './modelos.controller';
import { ModelosService } from './modelos.service';

describe('ModelosController', () => {
  let controller: ModelosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelosController],
      providers: [ModelosService],
    }).compile();

    controller = module.get<ModelosController>(ModelosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
