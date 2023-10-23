import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcasRepository: Repository<Marca>,
  ) {}

  findAll() {
    return this.marcasRepository.find();
  }

  async findOne(id: number) {
    const marca = await this.marcasRepository.findOneBy({ idMarca: id });
    if (marca) return marca;
    throw new NotFoundException(`No se encontro marca con el id ${id}`);
  }
}
