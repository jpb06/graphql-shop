import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

import { DatabaseService } from '@backend/database';

import { SignupInput } from './dtos/signup-input.dto';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  async getBy(email: string) {
    return this.db.user.findFirst({
      where: {
        email,
      },
    });
  }

  async signup({ email, lastName, firstName, password }: SignupInput) {
    const hashedPassword = await hash(password, 11);

    const user = this.db.user.create({
      data: {
        email,
        lastName,
        firstName,
        password: hashedPassword,
        role: 'USER',
      },
    });

    return user;
  }
}
