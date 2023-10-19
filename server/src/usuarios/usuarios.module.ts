import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Provincia } from '../provincias/entities/provincia.entity';
import { ProvinciasModule } from 'src/provincias/provincias.module';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';
import { SolicitudContacto } from 'src/solicitudescontacto/entities/solicitudcontacto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      Provincia,
      Publicacion,
      SolicitudContacto,
    ]),
    ProvinciasModule,
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
