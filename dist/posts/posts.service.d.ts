import { GroupsService } from "src/groups/groups.service";
import { ImagesService } from "src/images/images.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { Posts } from "./posts.model";
export declare class PostsService {
    private postRepository;
    private groupService;
    private imageService;
    constructor(postRepository: typeof Posts, groupService: GroupsService, imageService: ImagesService);
    create(dto: CreatePostDto): Promise<Posts>;
    getAllPosts(): Promise<Posts[]>;
    getPostById(id: any): Promise<Posts>;
    updatePost(id: number, dto: CreatePostDto): Promise<[affectedCount: number, affectedRows: Posts[]]>;
    deletePost(id: number): Promise<Posts>;
    getUnique(name: string): Promise<Posts>;
    fiendByGroup(groupId: number): Promise<import("../groups/post-groups.model").PostGroups[]>;
}
