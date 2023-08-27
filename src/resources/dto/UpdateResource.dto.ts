import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';

export class UpdateResourceDTO{
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

    // @IsEmpty({message: 'You cannot specify the creator of the resource'})
    // readonly created_by : string;

    // readonly created_at: Date;

    readonly updated_at: Date;    
}

