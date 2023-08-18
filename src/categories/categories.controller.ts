import { Controller } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService){}

    getAll(){
        return this.categoriesService.getAll();
    }

    getOne(id: number){
        return this.categoriesService.getOne(id);
    }

    create(payload: any){
        return this.categoriesService.create(payload);
    }

    update(id: number, payload: any){
        return this.categoriesService.update(id, payload);
    }

    delete(id: number){
        return this.categoriesService.delete(id);
    }
}
