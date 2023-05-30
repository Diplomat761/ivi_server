import { Model } from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
interface GroupCreationAttrs {
    keyword: string;
}
export declare class Group extends Model<Group, GroupCreationAttrs> {
    id: number;
    keyword: string;
    posts: Posts[];
}
export {};
