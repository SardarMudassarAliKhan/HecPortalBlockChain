import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css'],

})



export class UploadDocumentComponent implements OnInit {


  csvRecords: any[] = [];
  header = false;
  

  @Input() userData: any
  constructor(private API: APIService,
    private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
  }

  baseUrl = 'http://localhost:6060/'

  getData(data: any) {

    this.userData.cgpa = data.cgpa
    this.userData.remarks = data.remarks
    this.sendData(this.userData)


  }

  sendData(data: any) {
    let url = this.baseUrl + 'students/' + this.userData.cnic
    this.API.apiUpdateData(url, this.userData)
    // need to get received data to db as put or update!
  }

  approve(data: any) {
    if (data.to_verify == 'yes' && data.cgpa != 0) {
      let url = this.baseUrl + 'students/' + this.userData.cnic

      this.userData.to_verify = true
      this.API.apiUpdateData(url, this.userData)
    }
    else {
      console.log(data.to_verify)
    }
  }


  // // Your applications input change listener for the CSV File
  // fileChangeListener($event: any): void {

  //   // Select the files from the event
  //   const files = $event.srcElement.files;

  //   // Parse the file you want to select for the operation along with the configuration
  //   this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
  //     .pipe().subscribe((result: Array<any>) => {

  //       console.log('Result', result);
  //       this.csvRecords = result;
  //     }, (error: NgxCSVParserError) => {
  //       console.log('Error', error);
  //     });

  // }



}
