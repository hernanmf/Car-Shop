import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(correoElectronico: string, contraseña: string) {
    const usuario = await this.usuariosService.findByEmail(correoElectronico);

    if (!bcrypt.compareSync(contraseña, usuario.contraseña))
      throw new UnauthorizedException('Contraseña incorrecta');

    const payload = {
      sub: usuario.idUsuario,
      name: usuario.nombre,
      email: usuario.correoElectronico,
    };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
