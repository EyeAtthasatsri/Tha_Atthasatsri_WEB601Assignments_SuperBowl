import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, 
  // appConfig,
  {
    providers: [
      provideHttpClient(),
      provideProtractorTestingSupport(),
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false })),
    ]
  }
  )
 
.catch((err) => console.error(err));
