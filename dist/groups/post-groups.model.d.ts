import { Model } from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
import { Group } from "./groups.model";
export declare class PostGroups extends Model<PostGroups> {
    id: number;
    groupId: number;
    postId: number;
    posts: Posts[];
    groups: Group[];
}
