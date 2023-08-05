import { Injectable, NotFoundException } from '@nestjs/common';
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
    const u = await this.usuarios.findOneBy({ idusuario: id });
    if (u) return u;
    throw new NotFoundException(`No se encontro foto con el id ${id}`);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
