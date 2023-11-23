import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  contraseña: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  correoElectronico: string;
}
