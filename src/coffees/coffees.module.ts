import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { CoffeeService } from 'src/coffees/services/coffee/coffee.service';
import { Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './controllers/coffees.controller';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeeService, AppService],
})
export class CoffeesModule {}
