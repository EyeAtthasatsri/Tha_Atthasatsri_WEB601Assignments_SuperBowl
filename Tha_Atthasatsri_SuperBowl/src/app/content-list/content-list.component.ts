import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

  // ---------------- end ass 6

  // import { Content } from '../helper-files/content-interface';
  import { Content } from '../helper-files/contentDb';

  // ---------------- Add ass 6



  // ---------------- Add ass3

import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentTypeFilterPipe } from '../content-type-filter.pipe';
import { FormsModule } from '@angular/forms';

  // ---------------- end ass 4

  import { HoverAffectDirective } from '../hover-affect.directive';

  // ---------------- Add ass 4

 

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

  // ---------------- Add ass3

  
  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;


  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;

  }


  

  // ---------------- end ass3

  ngOnInit(): void {
    this.contentItems = [
      {
        id: 1,
        title: "Super Bowl (2023)",
        description: "Super Bowl LVII",
        creator:"Fox, Fox Deportes.",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Super_Bowl_LVII.svg/360px-Super_Bowl_LVII.svg.png",
        type:"American football",
        tags: ["National Football League","American Football Conference"]
      },
      {
        id: 2,
        title: "Super Bowl (2022)",
        description: "Super Bowl LVI",
        creator:"NBC, Telemundo",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/c/c6/Super_Bowl_LVI_logo.png",
        type:" National Football", // different Type value
        tags: ["National Football League","American Football Conference"]
      },
      {
        id: 3,
        title: "Super Bowl (2021)",
        description: "Super Bowl LV",
        creator:"CBS, ESPN Deportes",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/6/69/Super_Bowl_LV.png", 
        type:" ", // different Type value as no set
        tags: ["National Football League","American Football Conference"]
      },
      {
        id: 4,
        title: "Super Bowl (2020)",
        description: "Super Bowl LIV",
        creator:"Demi Lovato.",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Super_Bowl_LIV.svg/1200px-Super_Bowl_LIV.svg.png",
        type:"American football",
        tags: ["National Football League","American Football Conference"]
      },
      {
        id: 5,
        title: "Super Bowl (2019)",
        description: "Super Bowl LIII",
        creator:"CBS, ESPN Deportes.",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/2/2e/Super_Bowl_LIII_logo.png",
        type:"National Football", // different Type value
        tags: ["National Football League","American Football Conference"]
      },
      {
        id: 6,
        title: "Super Bowl (2018)",
        description: "Super Bowl LII",
        creator:"NBC broadcast",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Super_Bowl_LII_logo.svg/1200px-Super_Bowl_LII_logo.svg.png",
        type:"American football",
        tags: ["National Football League","American Football Conference"]
      }
      ,{
        id: 7,
        title: "Super Bowl (2017)",
        description: "Super Bowl LI",
        creator:"Fox broadcast",
        imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Super_Bowl_LI_logo.svg/1200px-Super_Bowl_LI_logo.svg.png",
        type:" ", // different Type value as no set
        tags: ["National Football League","American Football Conference"]
      },

      // Ass4 : Add ID 8, imgUrl:" " is not set
      {
        id: 8,
        title: "Super Bowl (2016)",
        description: "Super Bowl 50",
        creator:"CBS ESPN Deportes",
        // imgUrl:" ", is not set
        type:"American football", // different Type value as no set
        tags: ["National Football League","American Football Conference"]
      }
    ]
  }
}
