import { Model } from "sequelize-typescript";
import { Group } from "src/groups/groups.model";
import { Image } from "src/images/images.model";
import { Movie } from "src/movies/movies.model";
import { User } from "src/users/users.model";
import { Comment } from "src/comment/comment.model";
interface PostCreationAttrs {
    uniqueName: string;
    title: string;
    content: string;
    userId: number;
    imageId: number;
    movieId: number;
}
export declare class Posts extends Model<Posts, PostCreationAttrs> {
    id: number;
    uniqueName: string;
    title: string;
    content: string;
    userId: number;
    author: User;
    movieId: number;
    movies: Movie;
    imageId: number;
    image: Image;
    groups: Group[];
    comments: Comment[];
}
export {};
