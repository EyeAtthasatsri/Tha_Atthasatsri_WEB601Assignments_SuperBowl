import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class SuperBowlService {

  constructor(private MessageService:MessageService) { }

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
