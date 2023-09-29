import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('Provincias')
export class Provincia {
  @PrimaryGeneratedColumn()
  idProvincia: number;
  @Column()
  nombre: string;

  @OneToMany(() => Usuario, (usuario) => usuario.provincia)
  @JoinColumn()
  usuarios: Usuario[];

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
