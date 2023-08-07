import { HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
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

  async update(id: number, updatePublicacionDto: UpdatePublicacionDto) {
    try {
      const result = await this.publicaciones.update(
        { idpublicacion: id },
        { idpublicacion: id, ...updatePublicacionDto }
      );
      console.log(`Update, id: ${id}, result: ${result}`);
      return result
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }

  async remove(id: number) {
    const r = await this.publicaciones.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (r.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro publicacion con el id ${id}`);
    }
  }
}
