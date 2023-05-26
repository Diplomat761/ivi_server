import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CommentController } from "./comment.controller";
import { Comment } from "./comment.model";
import { CommentService } from "./comment.service";

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [SequelizeModule.forFeature([Comment])],
})
export class CommentModule {}
