import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('modelo')
export class Modelo {
  @PrimaryGeneratedColumn()
  idModelo: number;
  @Column()
  nombre: string;
  @Column()
  idMarca: number;

  constructor(nombre: string, idMarca: number) {
    this.nombre = nombre;
    this.idMarca = idMarca;
  }
}
