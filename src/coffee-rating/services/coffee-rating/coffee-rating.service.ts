import { Injectable } from '@nestjs/common';
import { CoffeeService } from 'src/coffees/services/coffee/coffee.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeeService) {}
}
