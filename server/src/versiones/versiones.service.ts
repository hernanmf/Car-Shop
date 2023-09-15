import { Injectable } from '@nestjs/common';
import { CreateVersioneDto } from './dto/create-version.dto';
import { UpdateVersioneDto } from './dto/update-version.dto';

@Injectable()
export class VersionesService {
  create(createVersioneDto: CreateVersioneDto) {
    return 'This action adds a new versione';
  }

  findAll() {
    return `This action returns all versiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} versione`;
  }

  update(id: number, updateVersioneDto: UpdateVersioneDto) {
    return `This action updates a #${id} versione`;
  }

  remove(id: number) {
    return `This action removes a #${id} versione`;
  }
}
