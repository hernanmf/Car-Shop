import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('version')
export class Version {
  @PrimaryGeneratedColumn()
  idVersion: number;
  @Column()
  nombre: string;
  @Column()
  idModelo: number;
  @Column()
  idMarca: number;

  constructor(nombre: string, idModelo: number, idMarca: number) {
    this.nombre = nombre;
    this.idModelo = idModelo;
    this.idMarca = idMarca;
  }
}
