import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Coffee } from '../../entities/coffee.entity';
import { Flavor } from '../../entities/flavor.entity';
import { CoffeeService } from './coffee.service';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

describe('CoffeeService', () => {
  let service: CoffeeService;
  let coffeeRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeeService,
        {
          provide: Connection,
          useValue: {},
        },
        {
          provide: getRepositoryToken(Flavor),
          useValue: createMockRepository<Flavor>(),
        },
        {
          provide: getRepositoryToken(Coffee),
          useValue: createMockRepository<Coffee>(),
        },
      ],
    }).compile();

    service = module.get<CoffeeService>(CoffeeService);
    coffeeRepository = module.get<MockRepository>(getRepositoryToken(Coffee));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('when coffee with ID exists', () => {
      it('should return the coffee object', async () => {
        const coffeeId = -5;
        const expectedCoffee = {};

        coffeeRepository.findOne.mockReturnValue(expectedCoffee);
        const coffee = await service.findOne(coffeeId);
        expect(coffee).toEqual(expectedCoffee);
      });
    });
    describe('otherwise', () => {
      it('should throw the "NotFoundException"', async () => {
        const coffeeId = 1;

        coffeeRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(coffeeId);
        } catch (err) {
          expect(err).toBeInstanceOf(NotFoundException);
          expect(err.message).toEqual(`Coffee #${coffeeId} not found`);
        }
      });
    });
  });
});
