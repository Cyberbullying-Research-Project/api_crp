import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getAll(){
        return {
            message: 'Obtener todos los usuarios',                        
        };
    }

    getOne(id: number){
        return `Obtener un usuario ${id}`;
    }

    create(payload: any){
        return 'Crear un usuario';
    }

    update(id: number, payload: any){
        return `Actualizar un usuario ${id}`;
    }

    delete(id: number){
        return `Eliminar un usuario ${id}`;
    }
}
