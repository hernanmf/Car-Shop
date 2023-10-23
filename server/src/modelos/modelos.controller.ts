import { Controller, Get, Param } from '@nestjs/common';
import { ModelosService } from './modelos.service';

@Controller('Modelos')
export class ModelosController {
  constructor(private readonly modelosService: ModelosService) {}

  @Get()
  findAll() {
    return this.modelosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelosService.findOne(+id);
  }
}
