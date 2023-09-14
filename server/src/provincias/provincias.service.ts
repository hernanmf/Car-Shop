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
    const p = this.provincias.create(createProvinciaDto);
    return this.provincias.save(p);
  }

  findAll() {
    return this.provincias.find();
  }

  async findOne(id: number) {
    const p = await this.provincias.findOneBy({ idProvincia: id });
    if (p) return p;
    throw new NotFoundException(`No se encontro provincia con el id ${id}`);
  }

  async update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    try {
      const result = await this.provincias.update(
        { idProvincia: id },
        { idProvincia: id, ...updateProvinciaDto },
      );
      console.log(`Update, id: ${id}, result: ${result}`);
      return result;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro provincia con el id ${id}`);
    }
  }

  async remove(id: number) {
    const r = await this.provincias.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (r.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro provincia con el id ${id}`);
    }
  }
}
