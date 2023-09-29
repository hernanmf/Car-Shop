import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Provincia } from '../provincias/entities/provincia.entity';
import { ProvinciasModule } from 'src/provincias/provincias.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Provincia]), ProvinciasModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
