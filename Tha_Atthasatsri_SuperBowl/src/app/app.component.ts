import { Component, OnInit, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
// import { ContentCardComponent } from './content-card/content-card.component';
import { MessagesComponent } from './messages/messages.component';
import { SuperBowlService } from './services/super-bowl.service';
import { MessageService } from './message.service';
import { ContentCardComponent } from './content-card/content-card.component';

// Assignment 7
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { Content } from './helper-files/content-interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContentListComponent, 
    MessagesComponent, 
    ContentCardComponent,
    ModifyContentComponent,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'Super Bowl Game';

  

  // <-- Ass 6 -->

  items:any;

  constructor(private SuperBService: SuperBowlService, private MessageService: MessageService) { }

  ngOnInit() {
    // Fetch data when component is initialized
    this.getContentById(5);
  }
  
  getContentById(num: number) {
    // return this.SuperBService.getContentById(4).subscribe(content=> this.items = content);
    this.SuperBService.getContentById(num).subscribe(content => {
      this.items = content;
    });
  }


  // <-- End 6 -->  

  // contentList = [
  //   {
  //     id: 1,
  //     title: "Super Bowl (2023)",
  //     description: "Super Bowl LVII",
  //     creator:"Fox, Fox Deportes.",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Super_Bowl_LVII.svg/360px-Super_Bowl_LVII.svg.png",
  //     type:"American football",
  //     tags: "NFL"
  //   },
  //   {
  //     id: 2,
  //     title: "Super Bowl (2022)",
  //     description: "Super Bowl LVI",
  //     creator:"NBC, Telemundo",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/c/c6/Super_Bowl_LVI_logo.png",
  //     type:"American football",
  //     tags: "NFL"
  //   },
  //   {
  //     id: 3,
  //     title: "Super Bowl (2021)",
  //     description: "Super Bowl LV",
  //     creator:"CBS, ESPN Deportes",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/6/69/Super_Bowl_LV.png", 
  //     type:"American football",
  //     tags: "NFL"
  //   },
  //   {
  //     id: 4,
  //     title: "Super Bowl (2020)",
  //     description: "Super Bowl LIV",
  //     creator:"Demi Lovato.",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Super_Bowl_LIV.svg/1200px-Super_Bowl_LIV.svg.png",
  //     type:"American football",
  //     tags: "NFL"
  //   },
  //   {
  //     id: 5,
  //     title: "Super Bowl (2019)",
  //     description: "Super Bowl LIII",
  //     creator:"CBS, ESPN Deportes.",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/2/2e/Super_Bowl_LIII_logo.png",
  //     type:"American football",
  //     tags: "NFL" 
  //   }
  // ]

}