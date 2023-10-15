import { Module } from '@nestjs/common';
import { VersionesService } from './versiones.service';
import { VersionesController } from './versiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Version } from './entities/version.entity';
import { Modelo } from 'src/modelos/entities/modelo.entity';
import { ModelosModule } from 'src/modelos/modelos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Version, Modelo]), ModelosModule],
  controllers: [VersionesController],
  providers: [VersionesService],
})
export class VersionesModule {}
