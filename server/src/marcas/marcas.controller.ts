import { Controller, Get, Param } from '@nestjs/common';
import { MarcasService } from './marcas.service';

@Controller('Marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcasService.findOne(+id);
  }
}
