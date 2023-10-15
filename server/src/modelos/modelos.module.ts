import { Module } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { ModelosController } from './modelos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Marca } from 'src/marcas/entities/marca.entity';
import { MarcasModule } from 'src/marcas/marcas.module';
import { Version } from 'src/versiones/entities/version.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modelo, Marca, Version]), MarcasModule],
  controllers: [ModelosController],
  providers: [ModelosService],
  exports: [ModelosService],
})
export class ModelosModule {}
