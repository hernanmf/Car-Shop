import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Marca } from './entities/marca.entity';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcas: Repository<Marca>,
  ) {}

  create(createMarcaDto: CreateMarcaDto) {
    const marca = this.marcas.create(createMarcaDto);
    return this.marcas.save(marca);
  }

  findAll() {
    return this.marcas.find();
  }

  async findOne(id: number) {
    const marca = await this.marcas.findOneBy({ idMarca: id });
    if (marca) return marca;
    throw new NotFoundException(`No se encontro marca con el id ${id}`);
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    try {
      const resultado = await this.marcas.update(
        { idMarca: id },
        { idMarca: id, ...updateMarcaDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro marca con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.marcas.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${
        remover.affected ? 'Eliminado' : 'No eliminado'
      }`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro marca con el id ${id}`);
    }
  }
}
