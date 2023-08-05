import { Injectable } from '@nestjs/common';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';

@Injectable()
export class FotosService {
  create(createFotoDto: CreateFotoDto) {
    return 'This action adds a new foto';
  }

  findAll() {
    return `This action returns all fotos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foto`;
  }

  update(id: number, updateFotoDto: UpdateFotoDto) {
    return `This action updates a #${id} foto`;
  }

  remove(id: number) {
    return `This action removes a #${id} foto`;
  }
}
