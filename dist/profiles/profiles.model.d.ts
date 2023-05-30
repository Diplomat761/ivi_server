import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
interface ProfileCreationAttrs {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
}
export declare class Profile extends Model<Profile, ProfileCreationAttrs> {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
    userId: number;
    user: User;
}
export {};
