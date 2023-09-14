import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';

@Controller('Publicaciones')
export class PublicacionesController {
  constructor(private readonly publicacionesService: PublicacionesService) {}

  @Post()
  create(@Body() createPublicacionDto: CreatePublicacionDto) {
    return this.publicacionesService.create(createPublicacionDto);
  }

  @Get()
  findAll() {
    return this.publicacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublicacionDto: UpdatePublicacionDto,
  ) {
    return this.publicacionesService.update(+id, updatePublicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicacionesService.remove(+id);
  }
}
