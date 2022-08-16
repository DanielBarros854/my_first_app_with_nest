import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { UpdateCatDto } from './dto';
import { Cat } from './interface/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: '1',
      name: 'Rodolfo',
      age: 8,
    },
    {
      id: '2',
      name: 'Nina',
      age: 12,
    },
    {
      id: '3',
      name: 'Angelo',
      age: 3,
    },
    {
      id: '4',
      name: 'Mel',
      age: 1,
    },
  ];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return cat;
  }

  update(cat: Cat, fields: UpdateCatDto): void {
    const { name, age } = fields;

    if (age) {
      cat.age = age;
    }

    if (name) {
      cat.name = name;
    }
  }

  remove(id: string): void {
    const cat_index = this.cats.findIndex((cat) => cat.id === id);

    if (cat_index === -1) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    this.cats.splice(cat_index, cat_index + 1);
  }
}
