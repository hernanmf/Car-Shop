import { Module } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { FotosController } from './fotos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foto } from './entities/foto.entity';
import { PublicacionesModule } from 'src/publicaciones/publicaciones.module';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Foto, Publicacion])],
  controllers: [FotosController],
  providers: [FotosService],
  exports: [FotosService],
})
export class FotosModule {}
