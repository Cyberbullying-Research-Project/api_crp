import { Test, TestingModule } from '@nestjs/testing';
import { NarrativesController } from './narratives.controller';

describe('NarrativesController', () => {
  let controller: NarrativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NarrativesController],
    }).compile();

    controller = module.get<NarrativesController>(NarrativesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
