import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { provideRoutes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentSearchComponent } from './student-search.component';
import { StudentsComponent } from './students.component';
import { StudentService } from './student.service';
import { StudentSearchService } from './student-search.service';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentSearchComponent,
    StudentsComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    
  ],

  providers: [StudentService, StudentSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

