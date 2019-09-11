import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';

const AuthorSchema = Schema({
    _id: {
        type: Schema.ObjectId,
        default: Types.ObjectId
    },
    id:
    {
        type: String,
        default: uuid,
        required: true
    },
    first_name: { type: String, required: true },
    last_name: { type: String, require: true },
    gender: Number,
    email: { type: String, required: true },
    birth_date: String,
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});

AuthorSchema.methods.updateDoc = updateDocBuilder();
const Authors = model('Authors', AuthorSchema);

module.exports = Authors;