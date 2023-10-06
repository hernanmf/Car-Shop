import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('Fotos')
export class Foto {
  @PrimaryGeneratedColumn()
  idFoto: number;
  @Column()
  url: string;
  @Column()
  idpublicacion: number;

  @ManyToOne(() => Publicacion, (publicacion) => publicacion.fotos)
  @JoinColumn({ name: 'IDPublicacion' })
  publicacion: Publicacion;

  constructor(url: string, publicacion: Publicacion) {
    this.url = url;
    this.publicacion = publicacion;
  }
}
