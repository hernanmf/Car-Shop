import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Foto } from './entities/foto.entity';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';

@Injectable()
export class FotosService {
  constructor(
    @InjectRepository(Foto)
    private readonly fotos: Repository<Foto>,
  ) {}

  create(fotoDto: CreateFotoDto) {
    const f = this.fotos.create(fotoDto);
    return this.fotos.save(f);
  }

  findAll() {
    return this.fotos.find();
  }

  async findOne(id: number) {
    const f = await this.fotos.findOneBy({ idfoto: id });
    if (f) return f;
    throw new NotFoundException(`No se encontro foto con el id ${id}`);
  }

  async update(id: number, updateFotoDto: UpdateFotoDto) {
    try {
      const result = await this.fotos.update(
        { idfoto: id },
        { idfoto: id, ...updateFotoDto },
      );
      console.log(`Update, id: ${id}, result: ${result}`);
      return result;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro foto con el id ${id}`);
    }
  }

  async remove(id: number) {
    const r = await this.fotos.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (r.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro foto con el id ${id}`);
    }
  }
}
