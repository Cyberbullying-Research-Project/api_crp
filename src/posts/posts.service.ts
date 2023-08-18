import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    getAll(){
        return 'Obtener todos los posts';
    }

    getOne(id: number){
        return `Obtener un post ${id}`;
    }

    create(payload: any){
        return 'Crear un post';
    }

    update(id: number, payload: any){
        return `Actualizar un post ${id}`;
    }

    delete(id: number){
        return `Eliminar un post ${id}`;
    }
}
