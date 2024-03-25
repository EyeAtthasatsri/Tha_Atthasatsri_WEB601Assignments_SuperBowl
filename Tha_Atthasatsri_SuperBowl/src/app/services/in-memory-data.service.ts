import { Injectable } from '@angular/core';

// in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { count } from 'rxjs';
import { CONTENT } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  // createDb () {
  //   return {
  //     CONTENT: [
  //       {
  //         id: 1,
  //         title: "Super Bowl (2023)",
  //         description: "Super Bowl LVII",
  //         creator: "Fox, Fox Deportes.",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Super_Bowl_LVII.svg/360px-Super_Bowl_LVII.svg.png",
  //         type: "American football",
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 2,
  //         title: "Super Bowl (2022)",
  //         description: "Super Bowl LVI",
  //         creator: "NBC, Telemundo",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c6/Super_Bowl_LVI_logo.png",
  //         type: " National Football", // different Type value
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 3,
  //         title: "Super Bowl (2021)",
  //         description: "Super Bowl LV",
  //         creator: "CBS, ESPN Deportes",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/Super_Bowl_LV.png",
  //         type: " ", // different Type value as no set
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 4,
  //         title: "Super Bowl (2020)",
  //         description: "Super Bowl LIV",
  //         creator: "Demi Lovato.",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Super_Bowl_LIV.svg/1200px-Super_Bowl_LIV.svg.png",
  //         type: "American football",
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 5,
  //         title: "Super Bowl (2019)",
  //         description: "Super Bowl LIII",
  //         creator: "CBS, ESPN Deportes.",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Super_Bowl_LIII_logo.png",
  //         type: "National Football", // different Type value
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 6,
  //         title: "Super Bowl (2018)",
  //         description: "Super Bowl LII",
  //         creator: "NBC broadcast",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Super_Bowl_LII_logo.svg/1200px-Super_Bowl_LII_logo.svg.png",
  //         type: "American football",
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 7,
  //         title: "Super Bowl (2017)",
  //         description: "Super Bowl LI",
  //         creator: "Fox broadcast",
  //         imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Super_Bowl_LI_logo.svg/1200px-Super_Bowl_LI_logo.svg.png",
  //         type: " ", // different Type value as no set
  //         tags: ["National Football League", "American Football Conference"]
  //       },
  //       {
  //         id: 8,
  //         title: "Super Bowl (2016)",
  //         description: "Super Bowl 50",
  //         creator: "CBS ESPN Deportes",
  //         // imgUrl:" ", is not set
  //         type: "American football", // different Type value as no set
  //         tags: ["National Football League", "American Football Conference"]
  //       }
  //     ]
  //   };
  // }

  createDb() {
    // setting it to the value of our array of content
    // const content : Content[] = CONTENT;
    // return {content};
    return { content: CONTENT };
    }


    // Override the genId method to generate new IDs for content items
    // This method takes an array of content items as input and returns the next available ID
    genId(content: Content[]): number {

      
      // If there are existing content items, generate the next ID
      // Otherwise, return 2000 as the initial ID
      if (content.length > 0) {
          return Math.max(...(content.map(c => c.id) as number[])) + 1;
      } else {
          return 2000; // Initial ID when no content items exist
      }
    }
}
  // constructor() { }
