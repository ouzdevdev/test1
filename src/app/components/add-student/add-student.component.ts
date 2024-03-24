import { Component } from '@angular/core';
import { Student } from 'src/app/modules/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  student: Student = new Student(); // Assuming Student class has default constructor

  constructor(private studentsService: StudentsService) {}

  addStudent() {
    this.studentsService.addStudent(this.student).subscribe(
      () => {
        console.log('Student added successfully');
        // Optionally, you can navigate to a different page after adding the student
      },
      (error) => {
        console.error('Error adding student:', error);
        // Handle error here
      }
    );
  }
}
