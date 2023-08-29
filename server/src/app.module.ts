import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { FotosModule } from './fotos/fotos.module';
import { SolicitudescontactoModule } from './solicitudescontacto/solicitudescontacto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hernan87', /*'admin' en windows*/
      database: 'CarShopBD',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    PublicacionesModule,
    FotosModule,
    SolicitudescontactoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
