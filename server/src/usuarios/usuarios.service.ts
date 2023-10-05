import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { ProvinciasService } from 'src/provincias/provincias.service';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private provinciaService: ProvinciasService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const provincia = await this.provinciaService.findOne(
      createUsuarioDto.idprovincia,
    );

    if (!provincia)
      return new HttpException(
        'No se encontro Provincia',
        HttpStatus.NOT_FOUND,
      );

    const usuario = this.usuarioRepository.create(createUsuarioDto);
    usuario.provincia = provincia;
    console.log(usuario);
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
    return this.usuarioRepository.find({ relations: ['provincia'] });
  }

  async findOne(id: number) {
    /* const usuario = await this.usuarioRepository.findOneBy({ idUsuario: id }); */
    const usuario = await this.usuarioRepository.findOne({
      where: { idUsuario: id },
      relations: ['provincia'],
    });

    if (usuario) return usuario;
    throw new NotFoundException(`No se encontro usuario con el id ${id}`);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const resultado = await this.usuarioRepository.update(
        { idUsuario: id },
        { idUsuario: id, ...updateUsuarioDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
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
