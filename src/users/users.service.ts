import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

//@InjectModel(User.name) private userModel: Model<User>
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>) {}

  public async register(createUserDto: CreateUserDto): Promise<User | null> {
    const { email } = createUserDto;
    const userCheck = await this.usersRepository.findOne({ email });

    if (userCheck) {
      throw new HttpException(
        'User already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.usersRepository.save(user);
  }
  async findAll(): Promise<User[] | null> {
    // return this.userModel.find().exec();
    return null;
  }

  findOne(id: string): Promise<User | null> {
    // return this.userModel.findById(id).exec();
    return null;
  }

  findById(id: string): Promise<User | null> {
    // return this.userModel.findById(id).exec();
    return null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({ email });
  }
}