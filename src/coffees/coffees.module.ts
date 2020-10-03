import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeService } from './services/coffee/coffee.service';
import { Event } from '../events/entities/event.entity';
import coffeesConfig from './config/coffees.config';
import { CoffeesController } from './controllers/coffees.controller';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [CoffeeService],
  exports: [CoffeeService],
})
export class CoffeesModule {}
