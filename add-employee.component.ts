import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, } from '@angular/forms';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})


export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  items: any;



  constructor(private FormBuilder: FormBuilder,
    private employeeService:
      EmployeeDataService,) {
    this.createNewEmployeeForm();


  }
  ngOnInit(): void { }

  createNewEmployeeForm() {
    this.employeeForm = this.FormBuilder.group(
      {
        username: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required],
        gender: ['', Validators.required],
        designation: ['', Validators.required],
        phone_number: ['', Validators.required],
        complete_address: ['', Validators.required],
      });
    this.employeeForm.get('username').valueChanges.subscribe((value) => { });
    this.employeeForm.get('name').valueChanges.subscribe((value) => { });
    this.employeeForm.get('email').valueChanges.subscribe((value) => { });
    this.employeeForm.get('gender').valueChanges.subscribe((value) => { });
    this.employeeForm.get('designation').valueChanges.subscribe((value) => { });
    this.employeeForm.get('phone_number').valueChanges.subscribe((value) => { });
    this.employeeForm.get('complete_address').valueChanges.subscribe((value) => { });
  }




  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.employeeForm.invalid) {
      return;
    }
    else {
      this.employeeService.addEmployee({ ...this.employeeForm.value }).subscribe(data => this.employeeForm.reset );
    }
  window.alert("New Employee Details Adding");
  }
}
