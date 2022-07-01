
import { Schema, model, ObjectId } from "mongoose";

export interface IUser {
    name: String,
    password: String,
    email: String,
    rentals: Array<ObjectId>,
    homes: Array<ObjectId>,
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rentals: [{
        type: Schema.Types.ObjectId,
        // ref:
    }],
    homes: [{
        type: Schema.Types.ObjectId,
        // ref:
    }],
});

export default model<IUser>('User', userSchema);


