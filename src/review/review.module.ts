import { Image } from './entity/img.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { Review } from './entity/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Image])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
