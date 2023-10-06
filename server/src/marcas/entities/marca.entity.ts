import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  idMarca: number;
  @Column()
  nombre: string;
  @Column()
  foto: string;

  constructor(nombre: string, foto: string) {
    this.nombre = nombre;
    this.foto = foto;
  }
}
