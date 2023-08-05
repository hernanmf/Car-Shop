import { Module } from '@nestjs/common';
import { SolicitudescontactoService } from './solicitudescontacto.service';
import { SolicitudescontactoController } from './solicitudescontacto.controller';

@Module({
  controllers: [SolicitudescontactoController],
  providers: [SolicitudescontactoService]
})
export class SolicitudescontactoModule {}
