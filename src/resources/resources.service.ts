import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Resource } from './schemas/resource.schema';
import { CreateResourceDTO } from './dto/resources.dto';
import { Model } from 'mongoose';

@Injectable()
export class ResourcesService {
    constructor(
        @InjectModel(Resource.name) 
        private resourceModel: Model<Resource>
    ){}

    async getAll(): Promise<Resource[]>{
        const resources = await this.resourceModel.find();
        return resources;
    }

    async getOne(id: number): Promise <Resource>{
        const resource = await this.resourceModel.findById(id);
        return resource;
    }

    async create(newResouse: CreateResourceDTO): Promise<Resource>{
        const resource = await new this.resourceModel(newResouse);
        return resource.save();
    }        

    async update(id: number, updateResource: CreateResourceDTO){
        const resource = await this.resourceModel.findByIdAndUpdate(id, updateResource, {new: true});
        return resource;
    }

    async delete(id: number){
        const resource = await this.resourceModel.findByIdAndRemove(id);
        return resource;        
    }
}
