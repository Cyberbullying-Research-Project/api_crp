import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth} from './auth.entity';
import { SingUpDto } from './dto/singup.dto';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    singUp(@Body() singUpDto: SingUpDto): Promise<{ token: string }> {
        return this.authService.singUp(singUpDto);
    }

    @Get('/login')
    login(@Body() loginDto: loginDto): Promise<{ token: string }> {
        return this.authService.login(loginDto);
    }

}
