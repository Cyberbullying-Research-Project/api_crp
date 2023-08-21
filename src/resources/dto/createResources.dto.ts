import { IsArray, IsNotEmpty, IsString, IsEmpty } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateResourceDTO{
    @IsNotEmpty()
    @IsString()    
    readonly name: string;

    @IsNotEmpty()
    @IsString()    
    readonly description: string;

    @IsNotEmpty()
    @IsString()    
    readonly path: string;

    @IsNotEmpty()
    @IsString()    
    readonly type: string;

    readonly size: number;

    @IsEmpty({message: 'You cannot specify the creator of the resource'})
    readonly created_by : User;
    
}

