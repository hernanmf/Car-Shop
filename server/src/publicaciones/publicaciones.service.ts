import { Injectable, NotFoundException} from '@nestjs/common';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicacion } from './entities/publicacion.entity';

@Injectable()
export class PublicacionesService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicaciones: Repository<Publicacion>,
  ) {}

  create(publicacionDto: CreatePublicacionDto) {
    const p = this.publicaciones.create(publicacionDto);
    return this.publicaciones.save(p);
  }

  findAll() {
    return this.publicaciones.find();
  }

  async findOne(id: number) {
    const p = await this.publicaciones.findOneBy({ idpublicacion: id });
    if (p) return p;
    throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
  }

  update(id: number, updatePublicacionDto: UpdatePublicacionDto) {
    return `This action updates a #${id} publicacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicacione`;
  }
}
