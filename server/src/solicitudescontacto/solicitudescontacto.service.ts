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
import { UpdateSolicitudescontactoDto } from './dto/update-solicitudescontacto.dto';

@Injectable()
export class SolicitudescontactoService {
  constructor(
    @InjectRepository(SolicitudContacto)
    private readonly Solicitudescontacto: Repository<SolicitudContacto>,
  ) {}

  create(createSolicitudescontactoDto: CreateSolicitudescontactoDto) {
    const solicitud = this.Solicitudescontacto.create(
      createSolicitudescontactoDto,
    );
    return this.Solicitudescontacto.save(solicitud);
  }

  findAll() {
    return this.Solicitudescontacto.find();
  }

  async findOne(id: number) {
    const solicitud = await this.Solicitudescontacto.findOneBy({
      idSolicitudesDeContacto: id,
    });
    if (solicitud) return solicitud;
    throw new NotFoundException(`No se encontro solicitud con el id ${id}`);
  }

  async update(
    id: number,
    updateSolicitudescontactoDto: UpdateSolicitudescontactoDto,
  ) {
    try {
      const resultado = await this.Solicitudescontacto.update(
        { idSolicitudesDeContacto: id },
        { idSolicitudesDeContacto: id, ...updateSolicitudescontactoDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro solicitud con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.Solicitudescontacto.delete(id);
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
