import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('SolicitudesDeContacto')
export class SolicitudContacto {
  @PrimaryGeneratedColumn()
  idSolicitudesDeContacto: number;
  @Column()
  motivo: string;
  @Column()
  mensaje: string;
  @Column()
  idpublicacion: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.solcitudesContacto)
  @JoinColumn({ name: 'IDUsuario' })
  usuario: Usuario;

  constructor(
    motivo: string,
    mensaje: string,
    idpublicacion: number,
    usuario: Usuario,
  ) {
    this.motivo = motivo;
    this.mensaje = mensaje;
    this.idpublicacion = idpublicacion;
    this.usuario = usuario;
  }
}
