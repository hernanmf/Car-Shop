import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePublicacionDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsNumber()
  idversion: number;

  @IsNotEmpty()
  @IsNumber()
  anio: number;

  @IsNotEmpty()
  @IsNumber()
  kilometros: number;

  @IsString()
  transmision: string;

  @IsNumber()
  @IsPositive()
  rodado: number;

  @IsNumber()
  @IsPositive()
  potencia: number;

  @IsNumber()
  capacidadcarga: number;

  @IsString()
  traccion: string;

  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  precio: number;

  @IsString()
  descripcionadicional: string;

  @IsOptional()
  @IsBoolean()
  estadopublicacion: boolean;

  @IsNumber()
  @IsNotEmpty()
  idusuario: number;

  @IsArray()
  fotos: string[];
}
