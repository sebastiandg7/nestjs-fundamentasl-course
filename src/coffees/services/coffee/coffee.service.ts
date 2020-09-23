import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';
import { Coffee } from 'src/coffees/entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find(coffee => coffee.id === +id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push({ id: this.coffees.length + 1, ...createCoffeeDto });
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      this.coffees = this.coffees.map(coffee =>
        coffee.id === +id ? { ...coffee, ...updateCoffeeDto } : coffee,
      );
    }
  }

  remove(id: number) {
    this.coffees = this.coffees.filter(coffee => coffee.id !== +id);
  }
}
