import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VersionesService } from './versiones.service';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';

@Controller('Versiones')
export class VersionesController {
  constructor(private readonly versionesService: VersionesService) {}

  @Post()
  create(@Body() createVersionDto: CreateVersionDto) {
    return this.versionesService.create(createVersionDto);
  }

  @Get()
  findAll() {
    return this.versionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersionDto: UpdateVersionDto) {
    return this.versionesService.update(+id, updateVersionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versionesService.remove(+id);
  }
}
