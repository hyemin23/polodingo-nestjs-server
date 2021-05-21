import { ReviewService } from './review.service';
import { multerOptions } from './../multer/multerOPtions';

import {
  Body,
  Controller,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateImgDto } from './dto/create-img.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  //1:formData의 key값
  //2:파일 최대 갯수
  //3:파일 설정
  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post('/upload')
  public uploadFiles(
    @UploadedFiles() files: File[],
    @Body('userId') userId: number,
  ) {
    console.log('userId는 ㄴㄴㄴㄴㄴㄴㄴㄴ', userId);

    const uploadedFiles: string[] = this.reviewService.uploadFiles(
      files,
      userId,
    );
    return {
      status: 200,
      messaga: '파일 업로드를 성공하였습니다',
      data: {
        files: uploadedFiles,
      },
    };
  }
}
