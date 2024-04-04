
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/post.entity';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as cors from 'cors';
import {  MiddlewareConsumer, RequestMethod } from '@nestjs/common';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [User, Post],
        synchronize: true,
    }), 
    PostModule,
    UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}








