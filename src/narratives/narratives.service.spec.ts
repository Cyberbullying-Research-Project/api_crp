import { Test, TestingModule } from '@nestjs/testing';
import { NarrativesService } from './narratives.service';

describe('NarrativesService', () => {
  let service: NarrativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NarrativesService],
    }).compile();

    service = module.get<NarrativesService>(NarrativesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
