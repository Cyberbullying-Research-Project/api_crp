import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    getAll(){
        return 'Obtener todas las categorias';
    }

    getOne(id: number){
        return `Obtener una categoria ${id}`;
    }

    create(payload: any){
        return 'Crear una categoria';
    }

    update(id: number, payload: any){
        return `Actualizar una categoria ${id}`;
    }

    delete(id: number){
        return `Eliminar una categoria ${id}`;
    }
}
