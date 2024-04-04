// post.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/')
  async findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.findOne(+id);
  }

  @Post('create')
  async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    console.log("Creating the posts!")
    return this.postService.create(createPostDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.postService.remove(+id);
  }
}
