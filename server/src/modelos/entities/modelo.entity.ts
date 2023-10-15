import { Marca } from 'src/marcas/entities/marca.entity';
import { Version } from 'src/versiones/entities/version.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Modelos')
export class Modelo {
  @PrimaryGeneratedColumn()
  idModelo: number;
  @Column()
  nombre: string;

  @ManyToOne(() => Marca, (marca) => marca.modelos)
  @JoinColumn({ name: 'IDMarca' })
  marca: Marca;

  @OneToMany(() => Version, (version) => version.modelo)
  @JoinColumn()
  versiones: Version[];

  constructor(nombre: string, marca: Marca) {
    this.nombre = nombre;
    this.marca = marca;
  }
}
