import { Test, TestingModule } from '@nestjs/testing';
import { FotosService } from './fotos.service';

describe('FotosService', () => {
  let service: FotosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FotosService],
    }).compile();

    service = module.get<FotosService>(FotosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
