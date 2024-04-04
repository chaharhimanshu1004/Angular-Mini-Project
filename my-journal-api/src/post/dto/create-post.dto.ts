import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  createdAt: Date = new Date(); 
}