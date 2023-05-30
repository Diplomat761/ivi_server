import { Model } from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
interface ImageCreationAttrs {
    url: string;
    tableName: string;
    recordId: number;
}
export declare class Image extends Model<Image, ImageCreationAttrs> {
    id: number;
    url: string;
    tableName: string;
    recordId: number;
    posts: Posts[];
}
export {};
