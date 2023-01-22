import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';

import { JwtPayload } from './dtos/jwt-payload.dto';
import {
  UserWithoutPassword,
  withoutPassword,
} from './util/without-password.util';
import { UsersService } from '../users/users.service';

type AuthData = Omit<JwtPayload, 'iat' | 'exp' | 'joinDate'> & {
  token: string;
  joinDate: Date;
} & Omit<User, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return null;
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  getAuthData(user: UserWithoutPassword | User): AuthData {
    let payload = user;

    if ('password' in user) {
      payload = withoutPassword(user);
    }

    return {
      ...payload,
      token: this.jwtService.sign({ id: payload.id }),
    };
  }
}
