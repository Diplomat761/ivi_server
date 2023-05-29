import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { Roles } from "src/auth/utils/roles-auth.decorator";
import { RolesGuard } from "src/auth/utils/roles.guard";
import { CommentService } from "./comment.service";
import { createCommentDto } from "./dto/create-comment.dto";

@Controller("comment")
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Roles("ADMIN", "USER")
  @UseGuards(RolesGuard)
  @Post()
  createComment(@Body() dto: createCommentDto) {
    return this.commentService.create(dto);
  }
}
