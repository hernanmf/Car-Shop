import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelosService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modelosRepository: Repository<Modelo>,
  ) {}

  create(createModeloDto: CreateModeloDto) {
    const modelo = this.modelosRepository.create(createModeloDto);
    return this.modelosRepository.save(modelo);
  }

  findAll() {
    return this.modelosRepository.find;
  }

  async findOne(id: number) {
    const modelo = await this.modelosRepository.findOneBy({ idModelo: id });
    if (modelo) return modelo;
    throw new NotFoundException(`No se encontro modelo con el id ${id}`);
  }

  async update(id: number, updateModeloDto: UpdateModeloDto) {
    try {
      const resultado = await this.modelosRepository.update(
        { idModelo: id },
        { idModelo: id, ...updateModeloDto },
      );
      console.log(`Update, id: ${id}, result: ${resultado}`);
      return resultado;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`No se encontro modelo con el id ${id}`);
    }
  }

  async remove(id: number) {
    const remover = await this.modelosRepository.delete(id);
    console.log(
      `Remove, id: ${id}, result: ${
        remover.affected ? 'Eliminado' : 'No eliminado'
      }`,
    );
    if (remover.affected) {
      throw new HttpException(`Remove: id: ${id}`, HttpStatus.OK);
    } else {
      throw new NotFoundException(`No se encontro modelo con el id ${id}`);
    }
  }
}
