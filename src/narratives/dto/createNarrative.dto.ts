import { IsNotEmpty, IsString, IsEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateNarrativeDTO{
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly body: string;

    @IsNotEmpty()
    readonly resources: string[];
}