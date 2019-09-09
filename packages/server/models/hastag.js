import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';
import { numberLiteralTypeAnnotation } from '@babel/types';

//just for example!
const HastagSchema = Schema({
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
    name: String
});

HastagSchema.methods.updateDoc = updateDocBuilder();

const Hastag = model('Hastag', HastagSchema);

module.exports = Hastag;
