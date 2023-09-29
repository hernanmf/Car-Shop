import { Module } from '@nestjs/common';
import { ProvinciasService } from './provincias.service';
import { ProvinciasController } from './provincias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provincia } from './entities/provincia.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provincia, Usuario])],
  controllers: [ProvinciasController],
  providers: [ProvinciasService],
  exports: [ProvinciasService],
})
export class ProvinciasModule {}
