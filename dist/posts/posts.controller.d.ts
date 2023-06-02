import { CreatePostDto } from "./dto/create-post.dto";
import { Posts } from "./posts.model";
import { PostsService } from "./posts.service";
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(dto: CreatePostDto): Promise<Posts>;
    getAll(): Promise<Posts[]>;
    getOnePost(id: number): Promise<Posts>;
    updatePost(id: number, dto: CreatePostDto): Promise<[affectedCount: number, affectedRows: Posts[]]>;
    deletePost(id: number): Promise<Posts>;
    getUnique({ name }: {
        name: string;
    }): Promise<Posts>;
    fiendByGroup({ groupId }: {
        groupId: number;
    }): Promise<import("../groups/post-groups.model").PostGroups[]>;
}
