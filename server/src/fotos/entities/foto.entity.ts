import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('foto')
export class Foto {
  @PrimaryGeneratedColumn()
  idfoto: number;
  @Column()
  url: string;
  @Column()
  idpublicacion: number;

  constructor(url: string, idpublicacion: number) {
    this.url = url;
    this.idpublicacion = idpublicacion;
  }
}
