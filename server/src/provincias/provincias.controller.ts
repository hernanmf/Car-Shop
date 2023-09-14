import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvinciasService } from './provincias.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';

@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Post()
  create(@Body() createProvinciaDto: CreateProvinciaDto) {
    return this.provinciasService.create(createProvinciaDto);
  }

  @Get()
  findAll() {
    return this.provinciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvinciaDto: UpdateProvinciaDto) {
    return this.provinciasService.update(+id, updateProvinciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinciasService.remove(+id);
  }
}
