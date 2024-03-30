import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for form reset


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

  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    imgUrl: '',
    type: '',
    tags: []
  };

  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();
  
  // ViewChild decorator to get reference to the form
  @ViewChild('contentForm') contentForm!: NgForm;

  // contentForm: any;

constructor(private superBowlService: SuperBowlService, private MessageService: MessageService) { }


  addContent() {
    this.superBowlService.addContent(this.newContent).subscribe((addedContent) => {
      // Emit the newly added content
      this.contentAdded.emit(addedContent);

      // Clear input fields and reset form
      this.clearForm();
    });
  }

  clearForm() {
    // Reset the form using the resetForm() method of the contentForm reference
    if (this.contentForm) {
      this.contentForm.resetForm();
    }

    // Clear input fields after adding content
    this.newContent = {
      title: '',
      description: '',
      creator: '',
      imgUrl: '',
      type: '',
      tags: []
    };
  }




}
