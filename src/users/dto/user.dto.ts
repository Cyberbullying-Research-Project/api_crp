import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../user.entity'
// DTO: Data Transfer Object
export class CreateUserDTO{    
    @IsNotEmpty()
    @IsString()    
    username: string;

    @IsNotEmpty()
    @IsEmail()    
    email: string;

    @IsNotEmpty()
    image: string;
    // created_at: Date;    
}

export class UpdateUserDTO{
    @IsNotEmpty()
    @IsString()    
    username: string;    

    @IsNotEmpty()
    @IsEmail()    
    email: string;

    @IsNotEmpty()    
    image: string;

    @IsNotEmpty()    
    role: UserRole

    //created_at: Date;    
}
