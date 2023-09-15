import { Test, TestingModule } from '@nestjs/testing';
import { VersionesController } from './versiones.controller';
import { VersionesService } from './versiones.service';

describe('VersionesController', () => {
  let controller: VersionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionesController],
      providers: [VersionesService],
    }).compile();

    controller = module.get<VersionesController>(VersionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
