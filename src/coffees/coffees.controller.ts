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
import { CoffeeService } from 'src/services/coffee/coffee.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `All coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOneById(@Param() params) {
    return `Coffee ${params.id}`;
  }

  @Post()
  create(@Body() requestBody) {
    return requestBody;
  }

  @Patch(':id')
  update(@Param('id') coffeeId: string, @Body() body) {
    return `This actions updates #${coffeeId} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') coffeeId: string, @Body() body) {
    return `This actions deletes #${coffeeId} coffee`;
  }
}
