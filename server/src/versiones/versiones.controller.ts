import { Controller, Get, Param } from '@nestjs/common';
import { VersionesService } from './versiones.service';

@Controller('Versiones')
export class VersionesController {
  constructor(private readonly versionesService: VersionesService) {}

  @Get()
  findAll() {
    return this.versionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versionesService.findOne(+id);
  }
}
