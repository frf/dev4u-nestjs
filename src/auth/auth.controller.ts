/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  UseGuards,
  HttpStatus,
  Response,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LocalAuthGuard } from './share/local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  public async register(@Response() res, @Body() createUserDto: CreateUserDto) {
    const token = await this.authService.register(createUserDto);
    return res.status(HttpStatus.OK).json(token);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req) {
    console.log(req.user)
    return this.authService.login(req.user)
  }
}