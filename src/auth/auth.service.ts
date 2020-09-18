/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Token } from './dto/token.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(userData: CreateUserDto): Promise<Token> {

    console.log(userData)
    try {
      const user = await this.usersService.register(userData);
      return this.createToken(user);
    } catch (err) {
      console.log(err)
      throw new HttpException(
        err.response,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  createToken(user: User): Token {
    const payload = 
    {
      name: user.name, 
      email: user.email, 
      sub: user.uuid,
      user: {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        type: 2,
        telefone: null,
        profissional: {
          conselho: 123456,
          tipo_conselho_id: 1,
          uf_conselho: 'RJ',
          curriculum: null,
          historia: null,
          facebook: null,
          instagram: null,
          website: null,
          youtube: null,
          slogan: null,
          status: null,
          foto: '',
          foto_maior: '',
          especialidades: []
        },
        status: 1,
        role: {
          name: 'profissional',
          readable_name: 'Profissional Saude'
        }
      }
    }
    return {token: this.jwtService.sign(payload)};
  }

  async validateUserToken(payload: JwtPayload): Promise<User | null> {
    return await this.usersService.findById(payload.id + '');
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    const passwordCheck = await bcrypt.compare(password, user.password);

    if (user && passwordCheck) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    return this.createToken(user)
  }
}