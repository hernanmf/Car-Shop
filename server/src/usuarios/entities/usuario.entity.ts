import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario: number;
  @Column()
  nombrecompleto: string;
  @Column()
  correoelectronico: string;
  @Column()
  telefono: string;
  @Column()
  provincia: string;
  @Column()
  admin: boolean;

  constructor(
    nombrecompleto: string,
    correoelectronico: string,
    telefono: string,
    provincia: string,
    admin: boolean,
  ) {
    this.nombrecompleto = nombrecompleto;
    this.correoelectronico = correoelectronico;
    this.telefono = telefono;
    this.provincia = provincia;
    this.admin = admin;
  }
}
