import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Provincia } from './entities/provincia.entity';

@Injectable()
export class ProvinciasService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciasRepository: Repository<Provincia>,
  ) {}

  findAll() {
    return this.provinciasRepository.find();
  }

  async findOne(id: number) {
    const provincia = await this.provinciasRepository.findOneBy({
      idProvincia: id,
    });
    if (provincia) return provincia;
    throw new NotFoundException(`No se encontro provincia con el id ${id}`);
  }
}
