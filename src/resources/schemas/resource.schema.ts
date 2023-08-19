import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

    @Prop()
    created_by: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);