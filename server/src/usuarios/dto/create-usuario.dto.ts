import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  contraseña: string;

  @IsNotEmpty()
  @IsEmail()
  correoElectronico: string;

  @IsNumberString()
  telefono: string;

  @IsNotEmpty()
  @IsNumber()
  idprovincia: number;
}
