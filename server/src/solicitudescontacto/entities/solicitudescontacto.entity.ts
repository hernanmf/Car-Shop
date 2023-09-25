import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitudescontacto')
export class Solicitudescontacto {
  @PrimaryGeneratedColumn()
  idSolicitudesDeContacto: number;
  @Column()
  motivo: string;
  @Column()
  mensaje: string;
  @Column()
  idpublicacion: number;
  @Column()
  idusuario: number;

  constructor(
    motivo: string,
    mensaje: string,
    idpublicacion: number,
    idusuario: number,
  ) {
    this.motivo = motivo;
    this.mensaje = mensaje;
    this.idpublicacion = idpublicacion;
    this.idusuario = idusuario;
  }
}

