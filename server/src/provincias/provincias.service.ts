import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Provincia } from './entities/provincia.entity';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';

@Injectable()
export class ProvinciasService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provincias: Repository<Provincia>,
  ) {}

  create(createProvinciaDto: CreateProvinciaDto) {
    const provincia = this.provincias.create(createProvinciaDto);
    return this.provincias.save(provincia);
  }

  findAll() {
    return this.provincias.find();
  }

  async findOne(id: number) {
    const provincia = await this.provincias.findOneBy({ idProvincia: id });
    if (provincia) return provincia;
    throw new NotFoundException(`No se encontro provincia con el id ${id}`);
  }

  async update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    try {
      const resultado = await this.provincias.update(
        { idProvincia: id },
        { idProvincia: id, ...updateProvinciaDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro provincia con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.provincias.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${remover.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro provincia con el id ${id}`);
    }
  }
}
