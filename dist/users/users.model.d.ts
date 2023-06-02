import { Model } from "sequelize-typescript";
import { Comment } from "src/comment/comment.model";
import { Posts } from "src/posts/posts.model";
import { Profile } from "src/profiles/profiles.model";
import { Role } from "src/roles/roles.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    posts: Posts[];
    coments: Comment[];
    profile: Profile[];
}
export {};
