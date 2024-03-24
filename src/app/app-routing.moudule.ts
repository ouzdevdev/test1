import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./components/students/students.component";
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { UpdateStudentComponent } from "./components/update-student/update-student.component";
import { TrainComponent } from "./components/train/train.component";


const routes: Routes = [
  {path:"",component:TrainComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/add",component:AddStudentComponent},
  {path:"students/update",component:UpdateStudentComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
