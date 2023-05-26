import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "./comment.model";
import { createCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment
  ) {}

  async create(dto: createCommentDto) {
    const comment = await this.commentRepository.create(dto);
    return comment;
  }
}
