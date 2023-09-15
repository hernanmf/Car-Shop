import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { FotosModule } from './fotos/fotos.module';
import { SolicitudescontactoModule } from './solicitudescontacto/solicitudescontacto.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { MarcasModule } from './marcas/marcas.module';
import { ModelosModule } from './modelos/modelos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Carshop2023',
      database: 'CarShopBD',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsuariosModule,
    PublicacionesModule,
    FotosModule,
    SolicitudescontactoModule,
    ProvinciasModule,
    MarcasModule,
    ModelosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
