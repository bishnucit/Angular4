import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentSearchComponent } from './student-search.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent } from './students.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { provideRoutes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { StudentService } from './student.service';
import { StudentSearchService } from './student-search.service';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        DashboardComponent,
        StudentDetailComponent,
        StudentSearchComponent,
        StudentsComponent,StudentDetailComponent ],
        imports: [RouterTestingModule,RouterModule,AppRoutingModule,
          BrowserModule,
          FormsModule,
          HttpModule,
          ],
          providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
            StudentService, StudentSearchService
          ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
