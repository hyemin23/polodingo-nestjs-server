import { createImageURL } from './../multer/multerOPtions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
  public uploadFiles(files: File[]): string[] {
    const generatedFiles: string[] = [];

    for (const file of files) {
      generatedFiles.push(createImageURL(file));
    }
    // http://localhost:8080/public/파일이름 형식으로 저장이 됩니다.
    console.log('파일경로,', generatedFiles);

    return generatedFiles;
  }
}
