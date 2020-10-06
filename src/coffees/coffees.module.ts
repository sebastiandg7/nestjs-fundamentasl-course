import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from 'src/app.service';
import { CoffeeService } from 'src/coffees/services/coffee/coffee.service';
import { Event, EventSchema } from 'src/events/entities/event.entity';
import { CoffeesController } from './controllers/coffees.controller';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeeService, AppService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
})
export class CoffeesModule {}
