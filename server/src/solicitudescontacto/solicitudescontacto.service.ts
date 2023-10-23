import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SolicitudContacto } from './entities/solicitudcontacto.entity';
import { CreateSolicitudescontactoDto } from './dto/create-solicitudescontacto.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class SolicitudescontactoService {
  constructor(
    @InjectRepository(SolicitudContacto)
    private readonly SolicitudescontactoRepository: Repository<SolicitudContacto>,
    private usuariosService: UsuariosService,
  ) {}

  async create(createSolicitudescontactoDto: CreateSolicitudescontactoDto) {
    const usuario = await this.usuariosService.findOne(
      createSolicitudescontactoDto.idusuario,
    );

    if (!usuario)
      return new HttpException('No se encontro usuario', HttpStatus.NOT_FOUND);

    const solicitud = this.SolicitudescontactoRepository.create(
      createSolicitudescontactoDto,
    );
    solicitud.usuario = usuario;
    console.log(usuario);
    return this.SolicitudescontactoRepository.save(solicitud);
  }

  findAll() {
    return this.SolicitudescontactoRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number) {
    const solicitud = await this.SolicitudescontactoRepository.findOne({
      where: { idSolicitudesDeContacto: id },
      relations: ['usuario'],
    });
    if (solicitud) return solicitud;
    throw new NotFoundException(`No se encontro solicitud con el id ${id}`);
  }
}
