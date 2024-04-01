import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for form reset


import { SuperBowlService } from '../services/super-bowl.service';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';



@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatOptionModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {


  // addContent: any;

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

constructor(
  private superBowlService: SuperBowlService,
  private MessageService: MessageService,
  private dialog:MatDialog) { }

  // Ass 8

  openDialog(): void {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '400px',
      data: this.newContent
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addContent(result);
      }
    });
  }

  addContent(content: Content): void {
    this.superBowlService.addContent(content).subscribe(() => {
      console.log('Content added successfully');
      this.dialog.closeAll();
    });
  }

  cancel(): void {
    this.dialog.closeAll();
  }

  // ------------------------------
  // addContent() {
  //   this.superBowlService.addContent(this.newContent).subscribe((addedContent) => {
  //     // Emit the newly added content
  //     this.contentAdded.emit(addedContent);

  //     // Clear input fields and reset form
  //     this.clearForm();
  //   });
  // }

  // clearForm() {
  //   // Reset the form using the resetForm() method of the contentForm reference
  //   if (this.contentForm) {
  //     this.contentForm.resetForm();
  //   }

    // Clear input fields after adding content
    // this.newContent = {
    //   title: '',
    //   description: '',
    //   creator: '',
    //   imgUrl: '',
    //   type: '',
    //   tags: []
    // };





}
