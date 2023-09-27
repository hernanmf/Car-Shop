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

  create(createFotoDto: CreateFotoDto) {
    const foto = this.fotos.create(createFotoDto);
    return this.fotos.save(foto);
  }

  findAll() {
    return this.fotos.find();
  }

  async findOne(id: number) {
    const foto = await this.fotos.findOneBy({ idFoto: id });
    if (foto) return foto;
    throw new NotFoundException(`No se encontro foto con el id ${id}`);
  }

  async update(id: number, updateFotoDto: UpdateFotoDto) {
    try {
      const resultado = await this.fotos.update(
        { idFoto: id },
        { idFoto: id, ...updateFotoDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro foto con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.fotos.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${
        remover.affected ? 'Eliminado' : 'No eliminado'
      }`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro foto con el id ${id}`);
    }
  }
}
