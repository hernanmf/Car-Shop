import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('Provincia')
export class Provincia {
  @PrimaryGeneratedColumn()
  idProvincia: number;
  @Column()
  nombre: string;

  @OneToMany(() => Provincia, (provincia) => provincia.usuarios)
  @JoinColumn()
  usuarios: Usuario[];

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
