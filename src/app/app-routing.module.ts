import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { RegisterNewDoctorsComponent } from './register-new-doctors/register-new-doctors.component';


const routes: Routes = [
  {
    path:'', redirectTo: 'registerNewDoctors', pathMatch:'full'
  },

{
   path: 'registerNewDoctors', component:RegisterNewDoctorsComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes),MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
