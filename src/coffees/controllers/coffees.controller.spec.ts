import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeService } from '../services/coffee/coffee.service';
import { CoffeesController } from './coffees.controller';

describe('CoffeesController', () => {
  let controller: CoffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [CoffeeService]
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
