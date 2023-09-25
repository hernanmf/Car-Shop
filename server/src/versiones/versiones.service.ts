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
    private readonly versiones: Repository<Version>,
  ) {}

  create(createVersionDto: CreateVersionDto) {
    const version = this.versiones.create(createVersionDto);
    return this.versiones.save(version);
  }

  findAll() {
    return this.versiones.find();
  }

  async findOne(id: number) {
    const version = await this.versiones.findOneBy({ idVersion: id });
    if (version) return version;
    throw new NotFoundException(`No se encontro version con el id ${id}`);
  }

  async update(id: number, updateVersionDto: UpdateVersionDto) {
    try {
      const resultado = await this.versiones.update(
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
    const remover = await this.versiones.delete(id);
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
