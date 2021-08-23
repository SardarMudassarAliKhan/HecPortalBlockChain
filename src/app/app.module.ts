import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPendingComponent } from './hecportal/hecVerification/search-pending/search-pending.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { NewStudentsComponent } from './university/new-students/new-students.component';
import { UpdatedStudentsComponent } from './university/updated-students/updated-students.component';
import { InprocessStudentsComponent } from './university/inprocess-students/inprocess-students.component';
import { VerifiedStudentsComponent } from './university/verified-students/verified-students.component';
import { AllStudentsComponent } from './university/all-students/all-students.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    SearchPendingComponent,
    UniversityHomeComponent,
    NewStudentsComponent,
    UpdatedStudentsComponent,
    InprocessStudentsComponent,
    VerifiedStudentsComponent,
    AllStudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    NgxCsvParserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
