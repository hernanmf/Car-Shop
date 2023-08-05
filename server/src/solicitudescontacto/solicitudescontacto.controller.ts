import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudescontactoService } from './solicitudescontacto.service';
import { CreateSolicitudescontactoDto } from './dto/create-solicitudescontacto.dto';
import { UpdateSolicitudescontactoDto } from './dto/update-solicitudescontacto.dto';

@Controller('solicitudescontacto')
export class SolicitudescontactoController {
  constructor(private readonly solicitudescontactoService: SolicitudescontactoService) {}

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudescontactoDto: UpdateSolicitudescontactoDto) {
    return this.solicitudescontactoService.update(+id, updateSolicitudescontactoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudescontactoService.remove(+id);
  }
}
