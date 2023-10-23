import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Version } from './entities/version.entity';
import { ModelosService } from 'src/modelos/modelos.service';

@Injectable()
export class VersionesService {
  constructor(
    @InjectRepository(Version)
    private readonly versionesRepository: Repository<Version>,
    private modelosService: ModelosService,
  ) {}

  findAll() {
    return this.versionesRepository.find({
      relations: ['modelo', 'modelo.marca'],
    });
  }

  async findOne(id: number) {
    const version = await this.versionesRepository.findOne({
      where: { idVersion: id },
      relations: ['modelo', 'modelo.marca'],
    });
    if (version) return version;
    throw new NotFoundException(`No se encontro version con el id ${id}`);
  }
}
