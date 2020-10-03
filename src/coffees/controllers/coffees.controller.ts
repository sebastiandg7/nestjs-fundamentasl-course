import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../../common/decorators/public.decorator';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CreateCoffeeDto } from '../dto/create-coffee.dto';
import { UpdateCoffeeDto } from '../dto/update-coffee.dto';
import { CoffeeService } from '../services/coffee/coffee.service';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  @Public()
  @ApiForbiddenResponse({ description: 'Forbidden'})
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) coffeeId: number) {
    return this.coffeeService.findOne(coffeeId);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) coffeeId: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.update(coffeeId, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) coffeeId: number) {
    return this.coffeeService.remove(coffeeId);
  }
}
