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
  
  }


