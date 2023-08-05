import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudescontactoService } from './solicitudescontacto.service';

describe('SolicitudescontactoService', () => {
  let service: SolicitudescontactoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudescontactoService],
    }).compile();

    service = module.get<SolicitudescontactoService>(SolicitudescontactoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
