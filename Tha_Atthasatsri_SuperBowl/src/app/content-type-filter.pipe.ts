import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter'
  // standalone: true
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(contentArr: Content [], type: string): Content[] {
    // return null;

    return contentArr.filter((content) => content.type.includes(type));
  }

}
