import { Test, TestingModule } from '@nestjs/testing';
import { VersionesService } from './versiones.service';

describe('VersionesService', () => {
  let service: VersionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionesService],
    }).compile();

    service = module.get<VersionesService>(VersionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
