import { Foto } from 'src/fotos/entities/foto.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Version } from 'src/versiones/entities/version.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('Publicaciones')
export class Publicacion {
  @PrimaryGeneratedColumn()
  idpublicacion: number;
  @Column()
  tipo: string;
  @Column()
  anio: number;
  @Column()
  kilometros: number;
  @Column()
  transmision: string;
  @Column()
  rodado: number;
  @Column()
  potencia: number;
  @Column()
  capacidadcarga: number;
  @Column()
  traccion: string;
  @Column()
  color: string;
  @Column()
  precio: number;
  @Column({
    transformer: {
      to: (value: string) => Buffer.from(value),
      from: (value: Buffer) => value.toString(),
    },
  })
  descripcionadicional: string;
  @Column()
  estadopublicacion: boolean;

  @OneToMany(() => Foto, (foto) => foto.publicacion)
  @JoinColumn({ name: 'IDPublicacion' })
  fotos: Foto[];

  @ManyToOne(() => Version, (version) => version.publicaciones)
  @JoinColumn({ name: 'IDVersion' })
  version: Version;

  @ManyToOne(() => Usuario, (usuario) => usuario.publicaciones)
  @JoinColumn({ name: 'IDUsuario' })
  usuario: Usuario;

  constructor(
    tipo: string,
    version: Version,
    anio: number,
    kilometros: number,
    transmision: string,
    rodado: number,
    potencia: number,
    capacidadcarga: number,
    traccion: string,
    color: string,
    precio: number,
    descripcionadicional: string,
    estadopublicacion: boolean,
    usuario: Usuario,
    fotos: Foto[],
  ) {
    this.tipo = tipo;
    this.version = version;
    this.anio = anio;
    this.kilometros = kilometros;
    this.transmision = transmision;
    this.rodado = rodado;
    this.potencia = potencia;
    this.capacidadcarga = capacidadcarga;
    this.traccion = traccion;
    this.color = color;
    this.precio = precio;
    this.descripcionadicional = descripcionadicional;
    this.estadopublicacion = estadopublicacion;
    this.usuario = usuario;
    this.fotos = fotos;
  }
}
