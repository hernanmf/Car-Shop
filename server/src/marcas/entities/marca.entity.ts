import { Modelo } from 'src/modelos/entities/modelo.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  idMarca: number;
  @Column()
  nombre: string;
  @Column()
  foto: string;

  @OneToMany(() => Modelo, (modelo) => modelo.marca)
  @JoinColumn()
  modelos: Modelo[];

  constructor(nombre: string, foto: string) {
    this.nombre = nombre;
    this.foto = foto;
  }
}
