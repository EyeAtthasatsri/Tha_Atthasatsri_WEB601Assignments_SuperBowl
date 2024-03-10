import { Pipe, PipeTransform } from '@angular/core';

 // ---------------- Add ass 6
  /**
   * Used import {Content } from './helper-files/contentDb' in stead of content-interface
   * */

// import { Content } from './helper-files/content-interface'; 

import { Content } from './helper-files/contentDb';

 // ---------------- end ass 6


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