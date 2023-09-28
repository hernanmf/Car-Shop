import { Module } from '@nestjs/common';
import { SolicitudescontactoService } from './solicitudescontacto.service';
import { SolicitudescontactoController } from './solicitudescontacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudContacto } from './entities/solicitudcontacto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudContacto])],
  controllers: [SolicitudescontactoController],
  providers: [SolicitudescontactoService],
})
export class SolicitudescontactoModule {}
