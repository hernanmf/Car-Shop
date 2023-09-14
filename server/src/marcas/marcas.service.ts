import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcas: Repository<Marca>,
  ) {}

  create(createMarcaDto: CreateMarcaDto) {
    const m = this.marcas.create(createMarcaDto);
    return this.marcas.save(m);
  }

  findAll() {
    return this.marcas.find();
  }

  async findOne(id: number) {
    const m = await this.marcas.findOneBy({ idMarca: id });
    if (m) return m;
    throw new NotFoundException(`No se encontro marca con el id ${id}`);
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    try {
      const result = await this.marcas.update(
        { idMarca: id },
        { idMarca: id, ...updateMarcaDto },
      );
      console.log(`Update, id: ${id}, result: ${result}`);
      return result;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro marca con el id ${id}`);
    }
  }

  async remove(id: number) {
    const r = await this.marcas.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${r.affected ? 'Eliminado' : 'No eliminado'}`,
    );
    if (r.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro marca con el id ${id}`);
    }
  }
}
