import { Component, Output, EventEmitter } from '@angular/core';

import { SuperBowlService } from '../services/super-bowl.service';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {

  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();

  // newContent: Partial<Content> = {
  //   title: '',
  //   description: '',
  //   creator: '',
  //   imgUrl: '',
  //   type: '',
  //   tags: []
  // };

  // constructor(private SuperBService: SuperBowlService) { }

  // addContent() {

  //   const newContent: Content = this.newContent as Content; // Explicitly cast newContent to Content

  //   this.SuperBService.addContent(newContent).subscribe(() => {
      
  //     // Clear input fields
  //     this.newContent = {
  //       title: '',
  //       description: '',
  //       creator: '',
  //       imgUrl: '',
  //       type: '',
  //       tags: []
  //     };
  //   });
  // }

  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    imgUrl: '',
    type: '',
    tags: []
  };
  
contentForm: any;

  constructor(private superBowlService: SuperBowlService, private MessageService: MessageService) { }

  addContent() {
    this.superBowlService.addContent(this.newContent).subscribe((addedContent) => {
      // Emit the newly added content
      this.contentAdded.emit(addedContent);
      
      
      // Clear input fields after adding content
      this.newContent = {
        title: '',
        description: '',
        creator: '',
        imgUrl: '',
        type: '',
        tags: []
      };
    });
  }


}
