import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciasService } from './provincias.service';

describe('ProvinciasService', () => {
  let service: ProvinciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvinciasService],
    }).compile();

    service = module.get<ProvinciasService>(ProvinciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
