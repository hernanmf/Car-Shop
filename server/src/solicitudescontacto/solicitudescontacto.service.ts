import { Injectable } from '@nestjs/common';
import { CreateSolicitudescontactoDto } from './dto/create-solicitudescontacto.dto';
import { UpdateSolicitudescontactoDto } from './dto/update-solicitudescontacto.dto';

@Injectable()
export class SolicitudescontactoService {
  create(createSolicitudescontactoDto: CreateSolicitudescontactoDto) {
    return 'This action adds a new solicitudescontacto';
  }

  findAll() {
    return `This action returns all solicitudescontacto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitudescontacto`;
  }

  update(id: number, updateSolicitudescontactoDto: UpdateSolicitudescontactoDto) {
    return `This action updates a #${id} solicitudescontacto`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitudescontacto`;
  }
}
