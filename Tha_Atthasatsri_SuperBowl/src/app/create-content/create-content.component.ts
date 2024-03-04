import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  @Output() createContent = new EventEmitter<any>();

  content: any = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgUrl: '',
    type: '',
    tags: []
  };

  errorMessage: string = '';

  onSubmit() {

    // Send the new content item up from the CreateContent component to the ContentList using the promise pattern.

    
    // Bonus: Check for required fields
    if (!this.content.id || !this.content.title || !this.content.description || !this.content.creator) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    // Clear previous error message
    this.errorMessage = '';

    // Simulate asynchronous content creation
    const promise = new Promise<void>((resolve, reject) => {
      


      /** When the new piece of content is successfully sent from the
       * CreateContent component using that pattern, the resolved promise should invoke a
       * success function that will add a message to the console saying the addition is successful.
       *  */ 
      
      if (Math.random() < 0.8) {
        this.createContent.emit({ ...this.content }); 
        console.log(`Content added successfully: ${this.content.title}`);

        // Clear input fields but there not working!
        this.content = { id: 0, title: '', description: '', creator: '', imgUrl: '', type: '', tags: [] }; 
        resolve();

      } else {

        // Simulate failure
        reject('Failed to add content. Please try again.');
      }

    });



// Handle promise resolution/rejection
    promise
      .then(() => console.log('Promise resolved')) // Success function
      .catch((error) => {
        this.errorMessage = error; // Display error message
        console.error(`Promise rejected: ${error}`);
      });
  }


}
