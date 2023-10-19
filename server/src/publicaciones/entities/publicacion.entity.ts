import { Foto } from 'src/fotos/entities/foto.entity';
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
  @Column()
  descripcionadicional: string;
  @Column()
  estadopublicacion: boolean;
  @Column()
  idusuario: number;

  @OneToMany(() => Foto, (foto) => foto.publicacion)
  @JoinColumn({ name: 'IDPublicacion' })
  fotos: Foto[];

  @ManyToOne(() => Version, (version) => version.publicaciones)
  @JoinColumn({ name: 'IDVersion' })
  version: Version;

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
    idusuario: number,
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
    this.idusuario = idusuario;
    this.fotos = fotos;
  }
}
