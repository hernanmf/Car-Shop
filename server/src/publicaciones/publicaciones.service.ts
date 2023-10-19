import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Publicacion } from './entities/publicacion.entity';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { VersionesService } from 'src/versiones/versiones.service';

@Injectable()
export class PublicacionesService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionesRepository: Repository<Publicacion>,
    private versionesService: VersionesService,
  ) {}

  async create(publicacionDto: CreatePublicacionDto) {
    const version = await this.versionesService.findOne(
      publicacionDto.idversion,
    );
    if (!version)
      return new HttpException('No se encontro Version', HttpStatus.NOT_FOUND);

    const publicacion = this.publicacionesRepository.create(publicacionDto);
    publicacion.version = version;
    console.log(version);
    return this.publicacionesRepository.save(publicacion);
  }

  findAll() {
    return this.publicacionesRepository.find({
      relations: ['fotos', 'version', 'version.modelo', 'version.modelo.marca'],
    });
  }

  async findOne(id: number) {
    const publicacion = await this.publicacionesRepository.findOne({
      where: { idpublicacion: id },
      relations: ['fotos','version', 'version.modelo', 'version.modelo.marca'],
    });
    if (publicacion) return publicacion;
    throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
  }

  async update(id: number, updatePublicacionDto: UpdatePublicacionDto) {
    try {
      const resultado = await this.publicacionesRepository.update(
        { idpublicacion: id },
        { idpublicacion: id, ...updatePublicacionDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.publicacionesRepository.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${
        remover.affected ? 'Eliminado' : 'No eliminado'
      }`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }
}
