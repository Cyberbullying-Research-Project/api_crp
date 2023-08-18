import { Injectable } from '@nestjs/common';

@Injectable()
export class NarrativesService {
    getAll(){
        return 'Obtener todos los narratives';
    }

    getOne(id: number){
        return `Obtener un narrative ${id}`;
    }

    create(payload: any){
        return 'Crear un narrative';
    }

    update(id: number, payload: any){
        return `Actualizar un narrative ${id}`;
    }

    delete(id: number){
        return `Eliminar un narrative ${id}`;
    }
}
