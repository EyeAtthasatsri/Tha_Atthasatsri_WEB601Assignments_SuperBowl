import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

// Assignment 7 
// content.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SuperBowlService {

  // Assignment 7 

  // Assuming your in-memory server base URL is 'api/content'
  private apiUrl = 'api/CONTENT'; // Endpoint for content API

  constructor(
    private http: HttpClient,
    private MessageService:MessageService) { }


    addContent(content: Content): Observable<Content> {
      return this.http.post<Content>(this.apiUrl, CONTENT); 
    }

  //  End of Ass 7

// ----------------------------


// Assignment 6
  getContentObs():Observable<Content[]>{
    // return of(CONTENT);

    const contents = of(CONTENT);
    this.MessageService.add('Content Array Loaded!');
    return contents;

  }


  getContentById(id:number):Observable<any>{
    return of(CONTENT.find(item => item.id === id));
  }

}
