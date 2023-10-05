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

@Injectable()
export class VersionesService {
  constructor(
    @InjectRepository(Version)
    private readonly versionesRepository: Repository<Version>,
  ) {}

  create(createVersionDto: CreateVersionDto) {
    const version = this.versionesRepository.create(createVersionDto);
    return this.versionesRepository.save(version);
  }

  findAll() {
    return this.versionesRepository.find();
  }

  async findOne(id: number) {
    const version = await this.versionesRepository.findOneBy({ idVersion: id });
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
