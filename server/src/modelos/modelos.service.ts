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
import { MarcasService } from '../marcas/marcas.service';

@Injectable()
export class ModelosService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modelosRepository: Repository<Modelo>,
    private marcasService: MarcasService,
  ) {}

  async create(createModeloDto: CreateModeloDto) {
    const marca = await this.marcasService.findOne(createModeloDto.idMarca);

    if (!marca)
      return new HttpException(
        'No se encontro Provincia',
        HttpStatus.NOT_FOUND,
      );

    const modelo = this.modelosRepository.create(createModeloDto);
    modelo.marca = marca;
    console.log(modelo);
    return this.modelosRepository.save(modelo);
  }

  findAll() {
    return this.modelosRepository.find({ relations: ['marca'] });
  }

  async findOne(id: number) {
    const modelo = await this.modelosRepository.findOne({
      where: { idModelo: id },
      relations: ['marca'],
    });

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
