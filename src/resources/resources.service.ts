import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourcesService {
    getAll(){
        return 'Obtener todos los recursos';
    }

    getOne(id: number){
        return `Obtener un recurso ${id}`;
    }

    create(payload: any){
        return 'Crear un recurso';
    }

    update(id: number, payload: any){
        return `Actualizar un recurso ${id}`;
    }

    delete(id: number){
        return `Eliminar un recurso ${id}`;
    }
}
