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
import { PublicacionesService } from '../publicaciones/publicaciones.service';

@Injectable()
export class FotosService {
  constructor(
    @InjectRepository(Foto)
    private readonly fotosRepository: Repository<Foto>,
    private publicacionesService: PublicacionesService,
  ) {}

  async create(createFotoDto: CreateFotoDto) {
    const publicacion = await this.publicacionesService.findOne(
      createFotoDto.idpublicacion,
    );

    if (!publicacion)
      return new HttpException(
        'No se encontro Publicacion',
        HttpStatus.NOT_FOUND,
      );

    const foto = this.fotosRepository.create(createFotoDto);
    foto.publicacion = publicacion;
    console.log(foto);

    return this.fotosRepository.save(foto);
  }

  findAll() {
    return this.fotosRepository.find({ relations: ['publicacion'] });
  }

  async findOne(id: number) {
    const foto = await this.fotosRepository.findOne({
      where: { idFoto: id },
      relations: ['publicacion'],
    });
    if (foto) return foto;
    throw new NotFoundException(`No se encontro foto con el id ${id}`);
  }

  async update(id: number, updateFotoDto: UpdateFotoDto) {
    try {
      const resultado = await this.fotosRepository.update(
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
    const remover = await this.fotosRepository.delete(id);
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
