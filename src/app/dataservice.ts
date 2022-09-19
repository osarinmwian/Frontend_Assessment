import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Users } from './register-new-doctors/register-new-doctors.component';



@Injectable({
  providedIn: 'root'
})
export class DataService {
 apiurl = 'https://jsonplaceholder.typicode.com/users';
  RequiredRefresh: any;

  constructor(private http: HttpClient){
  }
  GetUser(): Observable<Users>{
    return this.http.get<Users>(this.apiurl);
  }
  Save(inputdata:any){
    return this.http.post(this.apiurl,inputdata).pipe(
      tap(()=>{
this.RequiredRefresh.next();
      })
    );
  }
}
