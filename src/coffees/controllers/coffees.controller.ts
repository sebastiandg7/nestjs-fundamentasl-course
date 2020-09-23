import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateCoffeeDto } from '../dto/create-coffee.dto';
import { UpdateCoffeeDto } from '../dto/update-coffee.dto';
import { CoffeeService } from '../services/coffee/coffee.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOneById(@Param() params) {
    return this.coffeeService.findOne(params.id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') coffeeId: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(coffeeId, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') coffeeId: number) {
    return this.coffeeService.remove(coffeeId);
  }
}
