import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../modules/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl = 'http://196.115.199.56:3000/api/v1/students/';
  matiere!:string;
  constructor(private http: HttpClient) { }

  // GET request to fetch all students
  getAllStudents(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  // POST request to add a new student
  addStudent(studentData: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, studentData);
  }
  fetchcount(): Observable<any>{
      return this.http.get<any>(this.baseUrl+"/ALL/nbrL")
  }


fetchCountMatiere(matiere: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/ALL/ValidationParMatiere`, { matiere });
}


}
