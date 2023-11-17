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
import { FotosService } from 'src/fotos/fotos.service';

@Injectable()
export class PublicacionesService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionesRepository: Repository<Publicacion>,
    private versionesService: VersionesService,
    private usuariosService: UsuariosService,
    private fotosService: FotosService,
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
    publicacion.anio = publicacionDto.anio;
    publicacion.capacidadcarga = publicacionDto.capacidadcarga;
    publicacion.color = publicacionDto.color;
    publicacion.descripcionadicional = publicacionDto.descripcionadicional;
    publicacion.kilometros = publicacionDto.kilometros;
    publicacion.potencia = publicacionDto.potencia;
    publicacion.precio = publicacionDto.precio;
    publicacion.rodado = publicacionDto.rodado;
    publicacion.tipo = publicacionDto.tipo;
    publicacion.traccion = publicacionDto.traccion;
    publicacion.transmision = publicacionDto.transmision;
    publicacion.usuario = usuario;
    publicacion.version = version;
    const resultado = await this.publicacionesRepository.save(publicacion);
    console.log(resultado.idpublicacion);
    const Fotos = [];
    publicacionDto.fotos.forEach((nuevaFoto) => {
      if (nuevaFoto != '') {
        Fotos.push(this.fotosService.create(nuevaFoto, resultado));
      }
    });
    await Promise.all(Fotos).then((data) => {
      data.map((d) => {
        delete d.publicacion;
      });
      console.log(JSON.stringify(data));
      resultado.fotos = data;
    });
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
    const publicaciones = await this.publicacionesRepository.find({
      where: {
        usuario: {
          idUsuario: id,
        },
      },
      relations: [
        'fotos',
        'version',
        'version.modelo',
        'version.modelo.marca',
        'usuario',
      ],
    });
    if (publicaciones) {
      return publicaciones;
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
      const version = await this.versionesService.findOne(
        updatePublicacionDto.idversion,
      );
      if (!version)
        return new HttpException(
          'No se encontro Version del vehiculo',
          HttpStatus.NOT_FOUND,
        );
      const publicacion = await this.findOne(id);
      if (!publicacion)
        return new HttpException(
          'No se encontro Publicacion',
          HttpStatus.NOT_FOUND,
        );

      const resultado = await this.publicacionesRepository.update(
        { idpublicacion: id },
        {
          anio: updatePublicacionDto.anio,
          capacidadcarga: updatePublicacionDto.capacidadcarga,
          color: updatePublicacionDto.color,
          descripcionadicional: updatePublicacionDto.descripcionadicional,
          estadopublicacion: updatePublicacionDto.estadopublicacion,
          kilometros: updatePublicacionDto.kilometros,
          potencia: updatePublicacionDto.potencia,
          precio: updatePublicacionDto.precio,
          rodado: updatePublicacionDto.rodado,
          tipo: updatePublicacionDto.tipo,
          traccion: updatePublicacionDto.traccion,
          transmision: updatePublicacionDto.transmision,
          version: version,
        },
      );

      console.log(`Update, id: ${id}, result: ${resultado}`);
      publicacion.fotos.forEach((element) => {
        this.fotosService.remove(element.idFoto);
      });
      const Fotos = [];
      updatePublicacionDto.fotos.forEach((nuevaFoto) => {
        if (nuevaFoto != '') {
          Fotos.push(this.fotosService.create(nuevaFoto, publicacion));
        }
      });
      /* await Promise.all(Fotos).then((data) => {}); */
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
