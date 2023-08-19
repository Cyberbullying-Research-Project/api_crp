import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateResourceDTO{
    @IsNotEmpty()
    @IsString()    
    name: string;

    @IsNotEmpty()
    @IsString()    
    description: string;

    @IsNotEmpty()
    @IsString()    
    path: string;

    @IsNotEmpty()
    @IsString()    
    type: string;

    size: number;
    
}

