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
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class PublicacionesService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionesRepository: Repository<Publicacion>,
    private versionesService: VersionesService,
    private usuariosService: UsuariosService,
  ) {}

  async create(publicacionDto: CreatePublicacionDto) {
    const usuario = await this.usuariosService.findOne(
      publicacionDto.idusuario,
    );
    const version = await this.versionesService.findOne(
      publicacionDto.idversion,
    );

    if (!version || !usuario)
      return new HttpException(
        'No se encontro Usuario o Version de la publicacion',
        HttpStatus.NOT_FOUND,
      );

    const publicacion = this.publicacionesRepository.create(publicacionDto);
    publicacion.usuario = usuario;
    publicacion.version = version;
    console.log(usuario);
    console.log(version);
    return this.publicacionesRepository.save(publicacion);
  }

  async findAll() {
    const publicaciones = await this.publicacionesRepository.find({
      where: { estadopublicacion: true },
      relations: [
        'fotos',
        'version',
        'version.modelo',
        'version.modelo.marca',
        'usuario',
        'usuario.provincia',
      ],
    });
    publicaciones.map((element) => {
      delete element.usuario.contraseña;
      delete element.usuario.administrador;
    });
    return publicaciones;
  }

  async findOne(id: number) {
    const publicacion = await this.publicacionesRepository.findOne({
      where: { idpublicacion: id },
      relations: [
        'fotos',
        'version',
        'version.modelo',
        'version.modelo.marca',
        'usuario',
        'usuario.provincia',
      ],
    });
    if (publicacion) {
      delete publicacion.usuario.administrador;
      delete publicacion.usuario.contraseña;
      return publicacion;
    } else {
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }

  async update(id: number, updatePublicacionDto: UpdatePublicacionDto) {
    try {
      const resultado = await this.publicacionesRepository.update(
        { idpublicacion: id },
        { ...updatePublicacionDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }

  async remove(id: number) {
    try {
      const resultado = await this.publicacionesRepository.update(
        { idpublicacion: id },
        { estadopublicacion: false },
      );
      console.log(`Remove, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }
}
