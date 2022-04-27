import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';


import { TEmployeeData, TAddEmployee } from '../employee.type';
import { EmployeeDataService } from '../employee-data.service';







@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})

export class EmployeeDataComponent implements OnInit {
  image = "./assets/PngItem_4212341.png";
  li: any;
  employees: TEmployeeData[];
  @Input() public employee: TEmployeeData;
  // @Output() public employeeDelete:EventEmitter<number>=new EventEmitter();
  employeeForm: FormGroup ;
  employeeId: number;
  items:any;
  newArray:TEmployeeData[];

 

  constructor(

    private fb: FormBuilder,
    private employeeService: EmployeeDataService,
    private router: Router,
    private route: ActivatedRoute) {

      this.createEmployeeEditForm();
      this.employeeService.getEmployeesData().subscribe((content) => {
        this.li = content;
        this.employees = this.li.data;
  });
  this.employeeService.getEmployeesData().subscribe((content)=>{
    this.items =content;
    this.newArray=this.items.data;
  });
  }



  ngOnInit(): void { }

/*
    this.employeeService.getEmployeeDetailesById(+employeeIdFromRoute).subscribe((content) => {
      this.items = content;
      this.employeeForm.controls['username'].patchValue(this.items.data.username);
      this.employeeForm.controls['name'].patchValue(this.items.data.name);
      this.employeeForm.controls['phone_number'].patchValue(this.items.data.phone_number);
      this.employeeForm.controls['complete_address'].patchValue(this.items.data.complete_address);

    });
*/
  createEmployeeEditForm() {
    this.employeeForm = this.fb.group(
      {
        username: ['', Validators.required],
        name: ['', Validators.required],
        phone_number: ['', Validators.required],
        complete_address: ['', Validators.required],
      }
    );
    this.employeeForm.get('username').valueChanges.subscribe((value) => { });
    this.employeeForm.get('name').valueChanges.subscribe((value) => { });
    this.employeeForm.get('phone_number').valueChanges.subscribe((value) => { });
    this.employeeForm.get('complete_address').valueChanges.subscribe((value) => { });
    
    
  }




  handleEmployeeEdit(event: MouseEvent) {
    event.preventDefault;
    console.log("Employees Data= ",this.employees);
    alert('Your are going to edit Employee Details.');
    const display = document.getElementById('id01').style.display = `block`;
    return display;
  }



  handleEmployeeDelete(id:number) {
    alert("Confirm Deletion ?");
   this.employeeService.removeEmployee(+id).subscribe(value=> value.id=id);
  };

  
  handleSave(event: MouseEvent) {
    event.preventDefault;
    if (this.employeeForm.invalid) {
      return;
    }
    else {
      this.employeeService.editEmployeeById(this.employeeId,{...this.employeeForm.value} ).subscribe((data) => 

        this.employeeForm.reset());
        window.alert("Details Saved !");
    }


  }

}



