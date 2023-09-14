import { Module } from '@nestjs/common';
import { ProvinciasService } from './provincias.service';
import { ProvinciasController } from './provincias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provincia } from './entities/provincia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provincia])],
  controllers: [ProvinciasController],
  providers: [ProvinciasService],
})
export class ProvinciasModule {}
