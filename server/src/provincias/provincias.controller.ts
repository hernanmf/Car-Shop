import { Controller, Get, Param } from '@nestjs/common';
import { ProvinciasService } from './provincias.service';

@Controller('Provincias')
export class ProvinciasController {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Get()
  findAll() {
    return this.provinciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciasService.findOne(+id);
  }
}
