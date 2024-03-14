import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface'; 


@Pipe({
  name: 'contentTypeFilter',
  standalone: true
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(contents: Content[], type: string): Content[] {

    return contents.filter(content => content.type === type);

}
}

 //   if(!type){
  //     return contents.filter(content => !content.type);
  //   }
  //   else{
  //     return contents.filter(content => content.type === type);
  //   }
  // }