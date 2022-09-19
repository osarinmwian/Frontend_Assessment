import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import{DataService} from '../dataservice'
import { MatSort } from '@angular/material/sort';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';




export interface Users{
 name: string;
 username: string;
 email: string;
 phone: number;
 address: string;
 website: string;
}
@Component({
  selector: 'app-register-new-doctors',
  templateUrl: './register-new-doctors.component.html',
  styleUrls: ['./register-new-doctors.component.css']
})
export class RegisterNewDoctorsComponent implements OnInit{
  users$!: Object;
  exform!: FormGroup;
  faSearch = faSearch;
  displayedColumns: string[] = ['name','username', 'email', 'phone', 'address','website'];
  empdata: any;
  @ViewChild(MatSort) sort! :MatSort
   constructor(private formBuilder : FormBuilder, private http: HttpClient, private dataSevice: DataService ) {
   }
   FilterChange(event:Event){
     const filvalue=(event.target as HTMLInputElement).value;
     this.empdata.filter= filvalue; 
   }
  GetAll(){
    this.dataSevice.GetUser().subscribe(result =>{
      this.empdata = result;
      this.empdata.sort =this.sort
    })
  }
  
  ngOnInit(): void {
    this.GetAll(); 
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'city' : new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'website' : new FormControl(null, [Validators.required, Validators.minLength(5)])  
    });
  }
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get username() {
    return this.exform.get('username');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get city() {
    return this.exform.get('city');
  }
  get website() {
    return this.exform.get('website');
  }
  getUsers() {
    return this.exform.get('name');
  }
}
  


