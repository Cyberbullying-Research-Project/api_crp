import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SingUpDto } from './dto/singup.dto'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) 
        private userModel : Model<User>,
        private jwtService: JwtService,
    ) {}

    async singUp(singUpDto: SingUpDto): Promise<{ token: string }> {
        const { name, email, password} = singUpDto;

        const hasedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            name,
            email,
            password: hasedPassword,
        })

        const token = await this.jwtService.sign({ id: user._id });

        return { token };
    }

    async login(loginDto): Promise<{ token: string }> {
        const { email, password} = loginDto;
        console.log(email, password);
        const user = await  this.userModel.findOne({ email });

        if(!user) {
            throw new UnauthorizedException('Invalid email');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        const token = await this.jwtService.sign({ id: user._id });

        return { token };

    }

}