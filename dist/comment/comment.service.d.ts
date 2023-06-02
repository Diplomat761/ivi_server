import { Comment } from "./comment.model";
import { createCommentDto } from "./dto/create-comment.dto";
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: typeof Comment);
    create(dto: createCommentDto): Promise<Comment>;
}
