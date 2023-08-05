import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';

@Controller('fotos')
export class FotosController {
  constructor(private readonly fotosService: FotosService) {}

  @Post()
  create(@Body() createFotoDto: CreateFotoDto) {
    return this.fotosService.create(createFotoDto);
  }

  @Get()
  findAll() {
    return this.fotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFotoDto: UpdateFotoDto) {
    return this.fotosService.update(+id, updateFotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotosService.remove(+id);
  }
}
