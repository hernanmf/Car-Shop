import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Solicitudescontacto } from './entities/solicitudescontacto.entity';
import { CreateSolicitudescontactoDto } from './dto/create-solicitudescontacto.dto';
import { UpdateSolicitudescontactoDto } from './dto/update-solicitudescontacto.dto';

@Injectable()
export class SolicitudescontactoService {
  constructor(
    @InjectRepository(Solicitudescontacto)
    private readonly Solicitudescontacto: Repository<Solicitudescontacto>,
  ) {}

  create(createSolicitudescontactoDto: CreateSolicitudescontactoDto) {
    const s = this.Solicitudescontacto.create(createSolicitudescontactoDto);
    return this.Solicitudescontacto.save(s);
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
