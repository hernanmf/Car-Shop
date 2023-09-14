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

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarios: Repository<Usuario>,
  ) {}

  create(usuarioDto: CreateUsuarioDto) {
    const u = this.usuarios.create(usuarioDto);
    return this.usuarios.save(u);
  }

  findAll() {
    return this.usuarios.find();
  }

  async findOne(id: number) {
    const u = await this.usuarios.findOneBy({ idUsuario: id });
    if (u) return u;
    throw new NotFoundException(`No se encontro foto con el id ${id}`);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const result = await this.usuarios.update(
        { idUsuario: id },
        { idUsuario: id, ...updateUsuarioDto },
      );
      console.log(`Update, id: ${id}, result: ${result}`);
      return result
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro usuario con el id ${id}`);
    }
  }

  async remove(id: number) {
    const r = await this.usuarios.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (r.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro usuario con el id ${id}`);
    }
  }
}
