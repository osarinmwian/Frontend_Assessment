import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { RegisterNewDoctorsComponent } from './register-new-doctors/register-new-doctors.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    RegisterNewDoctorsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule ,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterNewDoctorsComponent]
})
export class AppModule { }
