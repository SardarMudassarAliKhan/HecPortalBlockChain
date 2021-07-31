import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentDashBoardComponent } from './Student/student-dash-board/student-dash-board.component';
import { StudentDocumentComponent } from './Student/student-document/student-document.component';
import { StudentInformationComponent } from './Student/student-information/student-information.component';
import { UniversityDashBoardComponent } from './university/university-dash-board/university-dash-board.component';
import { UniversityStudentComponent } from './university/university-student/university-student.component';
import { UniversityComponent } from './university/university.component';
import { UploadDocumentComponent } from './university/upload-document/upload-document.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'NavbarComponent',component: NavbarComponent},
  {path:'UniversityComponent',component: UniversityComponent},
  {path:'StudentDashBoard',component: StudentDashBoardComponent},
  {path:'StudentInformation',component: StudentInformationComponent},
  {path:'StudentDocuments',component: StudentDocumentComponent},
  {path:'UniversityDashBoard',component: UniversityDashBoardComponent},
  {path:'UploadDocument',component: UploadDocumentComponent},
  {path:'UniversityStudent',component: UniversityStudentComponent},
  {path:'**',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [LoginComponent,NavbarComponent,UniversityComponent,StudentDashBoardComponent,
  StudentInformationComponent,StudentDocumentComponent,UniversityDashBoardComponent,UploadDocumentComponent,UniversityStudentComponent];
