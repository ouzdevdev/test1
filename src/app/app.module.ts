import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.moudule'; // Import AppRoutingModule
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsService } from './services/students.service'; // Import StudentsService
import { HttpClientModule } from '@angular/common/http';
import { TrainComponent } from './components/train/train.component';
import { MapsComponent } from './maps/maps.component';
import { ResponsiveComponent } from './components/responsive-tuto/responsive-tuto.component'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    TrainComponent,
    MapsComponent,
    ResponsiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
