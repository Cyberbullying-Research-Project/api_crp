import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Post extends Document{    
    @Prop()
    _id: string;

    @Prop()
    title: string;

    @Prop()
    body: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    posted_by: string;

    @Prop({ type: String, enum: ['DRAFT', 'PUBLISHED', 'DELETED'], default: 'DRAFT' })
    status:string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Resource'})
    resources: string;

    @Prop()
    keywords: string[];
}