import { Module } from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesController } from './publicaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { Foto } from '../fotos/entities/foto.entity';
import { Version } from 'src/versiones/entities/version.entity';
import { VersionesModule } from 'src/versiones/versiones.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publicacion, Foto, Version]),
    VersionesModule,
  ],
  controllers: [PublicacionesController],
  providers: [PublicacionesService],
  exports: [PublicacionesService],
})
export class PublicacionesModule {}
