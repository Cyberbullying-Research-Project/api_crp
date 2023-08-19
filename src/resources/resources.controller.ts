import { Controller, Get, Post, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDTO } from './dto/resources.dto';
import { Resource } from './resources.entity';

@Controller('resources')
export class ResourcesController {
    constructor(private resourcesService: ResourcesService){}

    @Get()
    getAll(){
        return this.resourcesService.getAll();
    }    

    @Get(':id')
    async getOne(@Param('id') id: string):Promise<Resource> {
        return this.resourcesService.getOne(id);
    }
    
    @Post()
    create(@Body() newResource: CreateResourceDTO){
        return this.resourcesService.create(newResource);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateResource: CreateResourceDTO):Promise<Resource>{
        return this.resourcesService.update(id, updateResource);
    }

    @Put(':id')
    updatePut(@Param('id') id: string, @Body() updateResource: CreateResourceDTO):Promise<Resource>{
        return this.resourcesService.update(id, updateResource);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.resourcesService.delete(id);
    }
}
