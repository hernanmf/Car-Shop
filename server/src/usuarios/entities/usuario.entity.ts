import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario: number;
  @Column()
  nombre: string;
  @Column()
  apellido: string;
  @Column()
  correoelectronico: string;
  @Column()
  telefono: string;
  @Column()
  idprovincia: number;
  @Column()
  admin: boolean;

  constructor(
    nombre: string,
    apellido: string,
    correoelectronico: string,
    telefono: string,
    idprovincia: number,
    admin: boolean,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correoelectronico = correoelectronico;
    this.telefono = telefono;
    this.idprovincia = idprovincia;
    this.admin = admin;
  }
}
