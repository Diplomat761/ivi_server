import { Model } from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
import { User } from "src/users/users.model";
interface CommentCreationAttrs {
    content: string;
    userId: number;
    postId: number;
}
export declare class Comment extends Model<Comment, CommentCreationAttrs> {
    id: number;
    content: string;
    userId: number;
    author: User;
    postId: number;
    posts: Posts;
}
export {};
