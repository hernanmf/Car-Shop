import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Publicacion } from './entities/publicacion.entity';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';

@Injectable()
export class PublicacionesService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicaciones: Repository<Publicacion>,
  ) {}

  create(publicacionDto: CreatePublicacionDto) {
    const publicacion = this.publicaciones.create(publicacionDto);
    return this.publicaciones.save(publicacion);
  }

  findAll() {
    return this.publicaciones.find();
  }

  async findOne(id: number) {
    const publicacion = await this.publicaciones.findOneBy({ idpublicacion: id });
    if (publicacion) return publicacion;
    throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
  }

  async update(id: number, updatePublicacionDto: UpdatePublicacionDto) {
    try {
      const resultado = await this.publicaciones.update(
        { idpublicacion: id },
        { idpublicacion: id, ...updatePublicacionDto }
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.publicaciones.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${remover.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }
}
