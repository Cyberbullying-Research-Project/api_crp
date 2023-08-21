import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema({
    timestamps: true
})

export class Resource {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    path: string;

    @Prop()
    type: string;

    @Prop()
    size: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    created_by: User;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);