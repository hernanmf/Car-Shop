import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudescontactoController } from './solicitudescontacto.controller';
import { SolicitudescontactoService } from './solicitudescontacto.service';

describe('SolicitudescontactoController', () => {
  let controller: SolicitudescontactoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudescontactoController],
      providers: [SolicitudescontactoService],
    }).compile();

    controller = module.get<SolicitudescontactoController>(SolicitudescontactoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
