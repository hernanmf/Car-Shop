import { Marca } from 'src/marcas/entities/marca.entity';
import { Modelo } from 'src/modelos/entities/modelo.entity';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Versiones')
export class Version {
  @PrimaryGeneratedColumn()
  idVersion: number;
  @Column()
  nombre: string;

  @ManyToOne(() => Modelo, (modelo) => modelo.versiones)
  @JoinColumn({ name: 'IDModelo' })
  modelo: Modelo;
  @JoinColumn({ name: 'IDMarca' })
  marca: Marca;

  @OneToMany(() => Publicacion, (publicacion) => publicacion.version)
  @JoinColumn()
  publicaciones: Publicacion[];

  constructor(nombre: string, modelo: Modelo, marca: Marca) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.marca = marca;
  }
}
