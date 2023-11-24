import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { ProvinciasService } from 'src/provincias/provincias.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private provinciasService: ProvinciasService,
  ) {}

  async findByEmail(correoElectronico: string) {
    const usuario = await this.usuarioRepository.findOne({
      where: { correoElectronico: correoElectronico },
      relations: ['provincia'],
    });
    if (!usuario) {
      throw new UnauthorizedException('Email no registrado');
    } else {
      return usuario;
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExiste = await this.usuarioRepository.findOne({
      where: { correoElectronico: createUsuarioDto.correoElectronico },
    });
    if (usuarioExiste)
      return new HttpException(
        'El Correo Electronico ya está en uso',
        HttpStatus.CONFLICT,
      );

    const provincia = await this.provinciasService.findOne(
      createUsuarioDto.idprovincia,
    );
    if (!provincia)
      return new HttpException(
        'No se encontro Provincia',
        HttpStatus.NOT_FOUND,
      );

    const usuario = this.usuarioRepository.create(createUsuarioDto);
    //Hash
    usuario.contraseña = await bcrypt.hashSync(createUsuarioDto.contraseña, 10);
    usuario.provincia = provincia;
    console.log(usuario);
    const resultado = await this.usuarioRepository.save(usuario);
    delete resultado.contraseña;
    return resultado;
  }

  async findAll() {
    const perfiles = await this.usuarioRepository.find({
      relations: ['provincia'],
    });
    perfiles.map((element) => {
      delete element.contraseña;
    });
    return perfiles;
  }

  //usar compare con bcrypt para comparar y loguearse
  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { idUsuario: id },
      relations: ['provincia'],
    });
    if (usuario) return usuario;
    throw new NotFoundException(`No se encontro usuario con el id ${id}`);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: {
          correoElectronico: updateUsuarioDto.correoElectronico,
        },
      });
      if (usuario.idUsuario != id)
        return new HttpException(
          'El correo electronico ya existe',
          HttpStatus.CONFLICT,
        );
      if (updateUsuarioDto.contraseña) {
        if (updateUsuarioDto.contraseña.length < 6) {
          return new HttpException(
            'El largo de la contraseña no supera los 6 caracteres de longitud',
            HttpStatus.CONFLICT,
          );
        } else {
          const resultado = await this.usuarioRepository.update(
            { idUsuario: id },
            {
              idUsuario: id,
              contraseña: await bcrypt.hashSync(
                updateUsuarioDto.contraseña,
                10,
              ),
              ...updateUsuarioDto,
            },
          );
          console.log(`Update, id: ${id}, result: ${resultado}`);
          return resultado;
        }
      } else {
        const resultado = await this.usuarioRepository.update(
          { idUsuario: id },
          { idUsuario: id, ...updateUsuarioDto },
        );
        console.log(`Update, id: ${id}, result: ${resultado}`);
        return resultado;
      }
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro usuario con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.usuarioRepository.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${
        remover.affected ? 'Eliminado' : 'No eliminado'
      }`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro usuario con el id ${id}`);
    }
  }
}
