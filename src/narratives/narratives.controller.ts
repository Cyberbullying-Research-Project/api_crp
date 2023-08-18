import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { NarrativesService } from './narratives.service';

@Controller('narratives')
export class NarrativesController {
    constructor(private narrativesService: NarrativesService){}

    @Get()
    getAll(){
        return this.narrativesService.getAll();
    }

    @Get(':id')
    getOne(id: number){
        return this.narrativesService.getOne(id);
    }

    @Post()
    create(payload: any){
        return this.narrativesService.create(payload);
    }

    @Put(':id')
    update(id: number, payload: any){
        return this.narrativesService.update(id, payload);
    }

    @Delete(':id')
    delete(id: number){
        return this.narrativesService.delete(id);
    }

}
