import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foto } from './entities/foto.entity';

@Injectable()
export class FotosService {
  constructor(
    @InjectRepository(Foto)
    private readonly fotos: Repository<Foto>,
  ) {}

  create(fotoDto: CreateFotoDto) {
    const f = this.fotos.create(fotoDto);
    return this.fotos.save(f);
  }

  findAll() {
    return this.fotos.find();
  }

  async findOne(id: number) {
    const f = await this.fotos.findOneBy({ idfoto: id });
    if (f) return f;
    throw new NotFoundException(`No se encontro foto con el id ${id}`);
  }

  update(id: number, updateFotoDto: UpdateFotoDto) {
    return `This action updates a #${id} foto`;
  }

  remove(id: number) {
    return `This action removes a #${id} foto`;
  }
}
