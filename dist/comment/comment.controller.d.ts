import { CommentService } from "./comment.service";
import { createCommentDto } from "./dto/create-comment.dto";
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    createComment(dto: createCommentDto): Promise<import("./comment.model").Comment>;
}
