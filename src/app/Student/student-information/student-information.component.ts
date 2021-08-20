import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { APIService } from '../../api.service'

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {
  userData: any
  baseUrl: any = 'http://localhost:6060/'
  default_status: boolean = false
  default_cgpa: number = 0.0
  default_remarks: string = ''
  img_url: any;


  constructor(private API: APIService) { }

  ngOnInit(): void {

  }


  getDataForDB(data: any) {
    // console.log(data)
    this.userData = data

    let url = this.baseUrl + 'students'

    this.userData = {
      id: data.id,
      name: data.name,
      father_name: data.father_name,
      date_of_birth: data.date_of_birth,
      email: data.email,
      contact: data.contact,
      cnic: data.cnic,
      department: data.department,
      cgpa: this.default_cgpa,
      remarks: this.default_remarks,
      status: this.default_status,
      verified_on: ''
    };


    console.log('display:', this.userData, 'from component')
    this.API.apiPostData(url, this.userData)
  }

  onSelectFile(e: any) {
    const profile:File = e.target.files[0]

    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.img_url = event.target.result;
      }
    }
  }

}
