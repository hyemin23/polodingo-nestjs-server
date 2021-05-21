import { Image } from './entity/img.entity';
import { Repository, getConnection } from 'typeorm';
import { createImageURL } from './../multer/multerOPtions';
import { Injectable } from '@nestjs/common';
import { CreateImgDto } from './dto/create-img.dto';

@Injectable()
export class ReviewService {
  //리뷰 파일 업로드
  public uploadFiles(files: File[], userId): string[] {
    const generatedFiles: string[] = [];

    console.log('userId는');
    console.log(userId);

    //db에도 저장
    for (const file of files) {
      generatedFiles.push(createImageURL(file));
      getConnection()
        .createQueryBuilder()
        .insert()
        .into(Image)
        .values({
          src: createImageURL(file),
          user: userId,
        })
        .execute();
    }

    // http://localhost:8080/public/파일이름 형식으로 저장이 됩니다.
    // console.log('파일경로,', generatedFiles);

    return generatedFiles;
  }
}
