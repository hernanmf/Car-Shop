import { Module } from '@nestjs/common';
import { SolicitudescontactoService } from './solicitudescontacto.service';
import { SolicitudescontactoController } from './solicitudescontacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitudescontacto } from './entities/solicitudescontacto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitudescontacto])],
  controllers: [SolicitudescontactoController],
  providers: [SolicitudescontactoService],
})
export class SolicitudescontactoModule {}
