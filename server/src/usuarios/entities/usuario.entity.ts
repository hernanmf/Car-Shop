import { Provincia } from 'src/provincias/entities/provincia.entity';
import { Publicacion } from 'src/publicaciones/entities/publicacion.entity';
import { SolicitudContacto } from 'src/solicitudescontacto/entities/solicitudcontacto.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;
  @Column()
  nombre: string;
  @Column()
  apellido: string;
  @Column()
  contraseña: string;
  @Column()
  correoElectronico: string;
  @Column()
  telefono: string;
  @Column()
  administrador: boolean;

  @ManyToOne(() => Provincia, (provincia) => provincia.usuarios)
  @JoinColumn({ name: 'IDProvincia' })
  provincia: Provincia;

  @OneToMany(() => Publicacion, (publicacion) => publicacion.usuario)
  @JoinColumn({ name: 'IDUsuario' })
  publicaciones: Publicacion[];

  @OneToMany(
    () => SolicitudContacto,
    (solicitudContacto) => solicitudContacto.usuario,
  )
  @JoinColumn()
  solcitudesContacto: SolicitudContacto[];

  constructor(
    nombre: string,
    apellido: string,
    contraseña: string,
    correoElectronico: string,
    telefono: string,
    provincia: Provincia,
    administrador: boolean,
    publicaciones: Publicacion[],
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.contraseña = contraseña;
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.provincia = provincia;
    this.administrador = administrador;
    this.publicaciones = publicaciones;
  }
}
