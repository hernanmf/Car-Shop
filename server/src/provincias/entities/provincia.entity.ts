import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('provincia')
export class Provincia {
  @PrimaryGeneratedColumn()
  idProvincia: number;
  @Column()
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
