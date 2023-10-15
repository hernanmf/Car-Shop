import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Version } from './entities/version.entity';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { ModelosService } from 'src/modelos/modelos.service';

@Injectable()
export class VersionesService {
  constructor(
    @InjectRepository(Version)
    private readonly versionesRepository: Repository<Version>,
    private modelosService: ModelosService,
  ) {}

  async create(createVersionDto: CreateVersionDto) {
    const modelo = await this.modelosService.findOne(createVersionDto.idModelo);

    if (!modelo)
      return new HttpException(
        'No se encontro Provincia',
        HttpStatus.NOT_FOUND,
      );

    const version = this.versionesRepository.create(createVersionDto);
    version.modelo = modelo;
    console.log(version);
    return this.versionesRepository.save(version);
  }

  findAll() {
    return this.versionesRepository.find({
      relations: ['modelo','marca'],
    });
  }

  async findOne(id: number) {
    const version = await this.versionesRepository.findOne({
      where: { idVersion: id },
      relations: ['modelo','marca'],
    });
    if (version) return version;
    throw new NotFoundException(`No se encontro version con el id ${id}`);
  }

  async update(id: number, updateVersionDto: UpdateVersionDto) {
    try {
      const resultado = await this.versionesRepository.update(
        { idVersion: id },
        { idVersion: id, ...updateVersionDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro foto con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.versionesRepository.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${
        remover.affected ? 'Eliminado' : 'No eliminado'
      }`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro version con el id ${id}`);
    }
  }
}
