import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Repository } from 'typeorm';
import { MarcasService } from '../marcas/marcas.service';

@Injectable()
export class ModelosService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modelosRepository: Repository<Modelo>,
    private marcasService: MarcasService,
  ) {}

  findAll() {
    return this.modelosRepository.find({ relations: ['marca'] });
  }

  async findOne(id: number) {
    const modelo = await this.modelosRepository.findOne({
      where: { idModelo: id },
      relations: ['marca'],
    });

    if (modelo) return modelo;
    throw new NotFoundException(`No se encontro modelo con el id ${id}`);
  }
}
