import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitudescontacto')
export class Solicitudescontacto {
  @PrimaryGeneratedColumn()
  idsolicitudesdecontacto: number;
  @Column()
  nombrecompleto: string;
  @Column()
  correoelectronico: string;
  @Column()
  telefono: string;
  @Column()
  motivo: string;
  @Column()
  mensaje: string;
  @Column()
  idpublicacion: number;
  @Column()
  idusuario: number;

  constructor(
    idsolicitudesdecontacto: number,
    nombrecompleto: string,
    correoelectronico: string,
    telefono: string,
    motivo: string,
    mensaje: string,
    idpublicacion: number,
    idusuario: number,
  ) {
    this.nombrecompleto = nombrecompleto;
    this.correoelectronico = correoelectronico;
    this.telefono = telefono;
    this.motivo = motivo;
    this.mensaje = mensaje;
    this.idpublicacion = idpublicacion;
    this.idusuario = idusuario;
  }
}

