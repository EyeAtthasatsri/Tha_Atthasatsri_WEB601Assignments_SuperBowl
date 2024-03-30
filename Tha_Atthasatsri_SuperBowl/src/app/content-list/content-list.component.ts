import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';


  // ---------------- Add ass3

import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentTypeFilterPipe } from '../content-type-filter.pipe';
import { FormsModule } from '@angular/forms';

  // ---------------- Add ass 4

  import { HoverAffectDirective } from '../hover-affect.directive';

  // ---------------- end ass 4

  // ---------------- Add ass 6

  import { SuperBowlService } from '../services/super-bowl.service';
  import { Observable } from 'rxjs';
  import { MessageService } from '../message.service';

  // ---------------- end ass 6

  // ---------------- Add ass 7

  import { ModifyContentComponent } from '../modify-content/modify-content.component';
  // ---------------- end ass 7


 

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipe, FormsModule, HoverAffectDirective, ModifyContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})



export class ContentListComponent implements OnInit{

  // Add cursor showm when users touch.
  showContentIdTitle(contentItem:Content): void {
    console.log(`ID: ${contentItem.id}, Title: ${contentItem.title}`);
  }


  @Input () contentItems: Content[] = [];
  @Input() items:Content[] = [];
  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>(); // Event emitter for adding content 
 
 
  contentList: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;
  
  // id:any;
  selectedContent?: Content;

  // newContent: Content = {
  //   title: '',
  //   description: '',
  //   creator: '',
  //   imgUrl: '',
  //   type: '',
  //   tags: []
  // };

  

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;

  }
  
  // ---------------- end ass3

  // Ass 6

  constructor (private SuperBService:SuperBowlService, private MessageService:MessageService){ }
  
  
  ngOnInit() {
    this.SuperBService.getContentObs().subscribe(content => this.contentItems = content);
    this.SuperBService.getContentById(4).subscribe(content=> this.items = content);
    console.log(this.items);
  }
  

  onSelect(content: Content):void{
    this.selectedContent = content;
    this.MessageService.add(`Content itme at ${content.id}`);
    console.log("clicked");
  }

  // end Ass 6


  // -------------------------------------------

// Assignment 7 
// @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>(); 
// Event emitter for adding content
  // addContent() {
  //   this.SuperBService.addContent(this.newContent).subscribe(newContent => {
  //     this.contentAdded.emit(newContent); // Emit event after content is successfully added
  //     this.MessageService.add('Content added successfully'); // Display message
  //     this.newContent = { // Clear input fields
  //       title: '',
  //       description: '',
  //       creator: '',
  //       imgUrl: '',
  //       type: '',
  //       tags: []
  //     };
  //   });
  // }


  

  onContentAdded(newContent: Content) {
    this.contentList.push(newContent);
    this.MessageService.add('Content added successfully');
  }


// -------------------------------------------
  
}
