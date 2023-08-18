import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { PostsService } from './posts.service';
import { get } from 'http';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService){}
    @Get()
    getAll(){
        return this.postsService.getAll();
    }
    @Get(':id')
    getOne(id: number){
        return this.postsService.getOne(id);
    }

    @Post()
    create(payload: any){
        return this.postsService.create(payload);
    }

    @Put(':id')
    update(id: number, payload: any){
        return this.postsService.update(id, payload);
    }

    @Delete(':id')
    delete(id: number){
        return this.postsService.delete(id);
    }
}
