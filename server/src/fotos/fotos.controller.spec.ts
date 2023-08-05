import { Test, TestingModule } from '@nestjs/testing';
import { FotosController } from './fotos.controller';
import { FotosService } from './fotos.service';

describe('FotosController', () => {
  let controller: FotosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FotosController],
      providers: [FotosService],
    }).compile();

    controller = module.get<FotosController>(FotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
