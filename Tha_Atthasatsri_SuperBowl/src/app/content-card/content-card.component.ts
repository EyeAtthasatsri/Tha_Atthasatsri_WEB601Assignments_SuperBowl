import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HoverAffectDirective } from '../hover-affect.directive';

// import { Title } from '@angular/platform-browser';
// import { Contentlist } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})


export class ContentCardComponent {
  @Input() contentItem : any;

  // Ass 6 
  @Input() item:any;
  
  // ------------------
  // effectBold = 'bold'
  // contentList: Contentlist = new Contentlist();

  // constructor() {
  //   this.contentList.addContent({
  //     id: 0,
  //     title: "Super Bowl (2023)",
  //     description: "Super Bowl LVII",
  //     creator:"Fox, Fox Deportes.",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Super_Bowl_LVII.svg/360px-Super_Bowl_LVII.svg.png",
  //     type:"American football"
  //   });

  //   this.contentList.addContent({
  //     id: 1,
  //     title: "Super Bowl (2022)",
  //     description: "Super Bowl LVI",
  //     creator:"NBC, Telemundo",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/c/c6/Super_Bowl_LVI_logo.png",
  //     type:"American football"
  //   });

  //   this.contentList.addContent({
  //     id: 2,
  //     title: "Super Bowl (2021)",
  //     description: "Super Bowl LV",
  //     creator:"CBS, ESPN Deportes",
  //     imgUrl:"https://upload.wikimedia.org/wikipedia/en/6/69/Super_Bowl_LV.png", 
  //     type:"American football"
  //   });


  }


