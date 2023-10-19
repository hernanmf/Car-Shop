import { Module } from '@nestjs/common';
import { SolicitudescontactoService } from './solicitudescontacto.service';
import { SolicitudescontactoController } from './solicitudescontacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudContacto } from './entities/solicitudcontacto.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SolicitudContacto, Usuario]),
    UsuariosModule,
  ],
  controllers: [SolicitudescontactoController],
  providers: [SolicitudescontactoService],
})
export class SolicitudescontactoModule {}
