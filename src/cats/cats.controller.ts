import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCatDto } from 'src/cats/dto/createCat.dto';
import { UpdateCatDto } from 'src/cats/dto/updateCatDto';
import { Cat } from 'src/cats/interface/cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  // @Get(':id')
  // findOneByParameter(@Param() params): Cat {
  //   return this.catsService.findOne(id);
  // } Or

  @Get(':id')
  findOne(@Param('id') id: string): Cat {
    return this.catsService.findOne(id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): void {
    const cat: Cat = {
      id: uuid(),
      ...createCatDto,
    };
    return this.catsService.create(cat);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() fields: UpdateCatDto): void {
    const cat = this.catsService.findOne(id);
    return this.catsService.update(cat, fields);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.catsService.remove(id);
  }
}
