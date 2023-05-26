import { Body, Controller, Post } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { createCommentDto } from "./dto/create-comment.dto";

@Controller("comment")
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  createComment(@Body() dto: createCommentDto) {
    return this.commentService.create(dto);
  }
}
