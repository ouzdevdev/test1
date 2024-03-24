import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../modules/student'; // Assuming you have a Student model

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  count !:number;
  countMatiereP !:number;
  matiere!:string;
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchCount();

  }

  fetchStudents() {
    this.studentsService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
        // Handle error here
      }
    );
  }

   fetchCount(){
      this.studentsService.fetchcount().subscribe(
        (data)=>{
          this.count = data;
        }
      )
    }

    fetchCountMatiere(){
      this.studentsService.fetchCountMatiere(this.matiere).subscribe(
        (data)=>{
          this.countMatiereP=data;
        }
      )
    }
}
