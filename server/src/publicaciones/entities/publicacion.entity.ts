import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publicacion')
export class Publicacion {
  @PrimaryGeneratedColumn()
  idpublicacion: number;
  @Column()
  tipo: string;
  @Column()
  idVersion: number;
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

  constructor(
    tipo: string,
    idVersion: number,
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
  ) {
    this.tipo = tipo;
    this.idVersion = idVersion;
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
  }
}
