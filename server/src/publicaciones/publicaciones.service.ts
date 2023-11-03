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

    const publicacion = this.publicacionesRepository.create();
    //desglosar en publicacion todo lo que trae el dto, luego hacer save y en el resultado voy a tener el id de publicacion para hacer los create de foto
    publicacion.anio = publicacionDto.anio;
    publicacion.usuario = usuario;
    publicacion.version = version;
    console.log(usuario);
    console.log(version);
    const resultado = this.publicacionesRepository.save(publicacion);
    //tirar los create de foto. importar el service de foto
    return resultado;

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
  //este find me trae todas las publicaciones de un usuario

  async findByUser(id: number) {
    const publicacion = await this.publicacionesRepository.find({
      where: { idpublicacion: id },
      relations: ['fotos', 'version', 'version.modelo', 'version.modelo.marca'],
    });
    if (publicacion) {
      return publicacion;
    } else {
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }

  /*   return this.postRepository.find({
      relations: ["author"],
      select: {
        id: true,
        title: true,
        body: true,
        author: {
          email: true
        }
      }
    });

userRepository.find({
    relations: {
        profile: true,
        photos: true,
        videos: {
            videoAttributes: true,
        },
    },
})
 */

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
      const publicacion = await this.publicacionesRepository.findOne({
        where: {
          idpublicacion: id,
          estadopublicacion: true,
        },
      });
      if (!publicacion)
        return new HttpException(
          `No se encontro Publicacion con el id ${id}`,
          HttpStatus.NOT_FOUND,
        );
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
