import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
// import { ContentCardComponent } from './content-card/content-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Super Bowl Game';

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
