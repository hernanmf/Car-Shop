import { Module } from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesController } from './publicaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { Foto } from '../fotos/entities/foto.entity';
import { Version } from 'src/versiones/entities/version.entity';
import { VersionesModule } from 'src/versiones/versiones.module';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { FotosModule } from 'src/fotos/fotos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publicacion, Foto, Version, Usuario]),
    VersionesModule,
    UsuariosModule,
    FotosModule,
  ],
  controllers: [PublicacionesController],
  providers: [PublicacionesService],
  exports: [PublicacionesService],
})
export class PublicacionesModule {}
