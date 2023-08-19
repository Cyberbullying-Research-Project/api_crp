import { IsNotEmpty, IsString, IsEmail} from 'class-validator';

export class SingUpDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
