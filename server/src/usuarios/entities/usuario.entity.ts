import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;
  @Column()
  nombre: string;
  @Column()
  apellido: string;
  @Column()
  correoElectronico: string;
  @Column()
  telefono: string;
  @Column()
  idProvincia: number;
  @Column()
  administrador: boolean;

  constructor(
    nombre: string,
    apellido: string,
    correoElectronico: string,
    telefono: string,
    idProvincia: number,
    administrador: boolean,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.idProvincia = idProvincia;
    this.administrador = administrador;
  }
}
