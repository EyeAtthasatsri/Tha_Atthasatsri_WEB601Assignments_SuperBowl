import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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

 

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipe, FormsModule, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})

export class ContentListComponent implements OnInit{

  // Add cursor showm when users touch.
  showContentIdTitle(contentItem:Content): void {
    console.log(`ID: ${contentItem.id}, Title: ${contentItem.title}`);
  }


  @Input () contentItems: Content[] = [];



   // ---------------- Add ass 6
  
   @Input() items:Content[] = [];



   
  // ---------------- Add ass3

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;
  
  id:any;
  selectedContent?: Content;


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
  
}
