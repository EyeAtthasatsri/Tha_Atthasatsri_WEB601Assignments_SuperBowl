import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


// bootstrapApplication(AppComponent, 
//   // appConfig,
//   {
//     providers: [
//       provideHttpClient(),
//       provideProtractorTestingSupport(),
//         importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
//           dataEncapsulation: false }))provideAnimationsAsync(),
//     ]
//   }
//   )
 
// .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideProtractorTestingSupport(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false 
    })),
  ]
})
.then(() => {
  provideAnimationsAsync(); // Call the function after bootstrapping the application
})
.catch((err) => console.error(err));
