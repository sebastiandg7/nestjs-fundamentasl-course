import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CoffeeService } from 'src/coffees/services/coffee/coffee.service';
import { CoffeesController } from './controllers/coffees.controller';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeeService, AppService],
})
export class CoffeesModule {}
