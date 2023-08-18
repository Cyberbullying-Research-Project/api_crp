import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller('resources')
export class ResourcesController {
    constructor(private resourcesService: ResourcesService){}

    @Get()
    getAll(){
        return this.resourcesService.getAll();
    }

    @Get(':id')
    getOne(id: number){
        return this.resourcesService.getOne(id);
    }

    @Post()
    create(payload: any){
        return this.resourcesService.create(payload);
    }

    @Put(':id')
    update(id: number, payload: any){
        return this.resourcesService.update(id, payload);
    }

    @Delete(':id')    
    delete(id: number){
        return this.resourcesService.delete(id);
    }
}
