import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SolicitudescontactoService } from './solicitudescontacto.service';
import { CreateSolicitudescontactoDto } from './dto/create-solicitudescontacto.dto';

@Controller('solicitudescontacto')
export class SolicitudescontactoController {
  constructor(
    private readonly solicitudescontactoService: SolicitudescontactoService,
  ) {}

  @Post()
  create(@Body() createSolicitudescontactoDto: CreateSolicitudescontactoDto) {
    return this.solicitudescontactoService.create(createSolicitudescontactoDto);
  }

  @Get()
  findAll() {
    return this.solicitudescontactoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudescontactoService.findOne(+id);
  }
}
