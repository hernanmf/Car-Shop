import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const usuario = await this.usuariosService.findByEmail(
      loginDto.correoElectronico,
    );

    if (!bcrypt.compareSync(loginDto.contraseña, usuario.contraseña))
      throw new UnauthorizedException('Contraseña incorrecta');

    const payload = {
      sub: usuario.idUsuario,
      name: usuario.nombre,
      email: usuario.correoElectronico,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      usuario: usuario,
    };
  }
}
