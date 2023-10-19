import { Module } from '@nestjs/common';
import { VersionesService } from './versiones.service';
import { VersionesController } from './versiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Version } from './entities/version.entity';
import { Modelo } from 'src/modelos/entities/modelo.entity';
import { ModelosModule } from 'src/modelos/modelos.module';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Version, Modelo, Publicacion]),
    ModelosModule,
  ],
  controllers: [VersionesController],
  providers: [VersionesService],
  exports: [VersionesService],
})
export class VersionesModule {}
