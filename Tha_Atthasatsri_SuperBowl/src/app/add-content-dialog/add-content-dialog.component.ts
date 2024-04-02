import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for form reset
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';


import { FormsModule } from '@angular/forms';
import { SuperBowlService } from '../services/super-bowl.service';

import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add-content-dialog',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule, MatOptionModule],
  templateUrl: './add-content-dialog.component.html',
  styleUrl: './add-content-dialog.component.scss'
})
export class AddContentDialogComponent {

  @Input() newContent!: Content;
  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();
  @ViewChild('contentForm') contentForm!: NgForm; // ViewChild to get reference to the form

  constructor(private superBowlService: SuperBowlService, private dialog: MatDialog) {}

  addContent(content: Content): void {
    this.superBowlService.addContent(content).subscribe((addedContent: Content) => {
      console.log('Content added successfully');
      this.contentAdded.emit(addedContent);
      this.dialog.closeAll();
      if (this.contentForm) {
        this.contentForm.resetForm();
      }
    }, error => {
      console.error('Error adding content:', error);
      // Handle error feedback here
    });
  }

  cancel(): void {
    this.dialog.closeAll();
    if (this.contentForm) {
      this.contentForm.resetForm();
    }
  }
}

  // ----------------------

  // newContent: Content = {
  //   title: '',
  //   description: '',
  //   creator: '',
  //   imgUrl: '',
  //   type: '',
  //   tags: []
  // };

  // @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();


  // constructor(
  //   private superBowlService: SuperBowlService,
  //   // private MessageService: MessageService,
  //   private dialog:MatDialog) { }
  
  //   // Ass 8
  
  //   openDialog(): void {
  //     const dialogRef = this.dialog.open(AddContentDialogComponent, {
  //       width: '400px',
  //       data: this.newContent
  //     });
  
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result) {
  //         this.addContent(result);
  //       }
  //     });
  //   }
  
  //   addContent(content: Content): void {
  //     this.superBowlService.addContent(content).subscribe(() => {
  //       console.log('Content added successfully');
  //       this.dialog.closeAll();
  //     });
  //   }
  
  //   cancel(): void {
  //     this.dialog.closeAll();
  //   }