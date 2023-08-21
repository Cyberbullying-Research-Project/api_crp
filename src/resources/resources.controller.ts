import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDTO } from './dto/createResources.dto';
import { Resource } from './resources.entity';
import { MongoIdPipe } from './resources.pipe';
import {Query as ExpressQuery} from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';


@Controller('resources')
export class ResourcesController {
    constructor(private resourcesService: ResourcesService){}

    @Get()
    getAll(@Query() query: ExpressQuery):Promise<Resource[]>{
        return this.resourcesService.getAll(query);
    }    

    @Get(':id')
    async getOne(@Param('id', MongoIdPipe) id: string ):Promise<Resource> {
        return this.resourcesService.getOne(id);
    }
    
    @Post()
    @UseGuards(AuthGuard())    
    create(@Body() newResource: CreateResourceDTO,@Req() req): Promise<Resource>{        
        return this.resourcesService.create(newResource, req.user);
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
