import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TEmployeeData } from '../employee.type';
import { EmployeeDataService } from '../employee-data.service';
import {EmployeeDataComponent} from '../employee-data/employee-data.component'


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})




export class EmployeeDetailsComponent implements OnInit {
  public items:any;
 
  
  constructor(private route: ActivatedRoute, private employeeService:EmployeeDataService, private employeeData:EmployeeDataComponent) {
    
   }

  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap;
      const employeeIdFromRoute=Number(routeParams.get('employeeId'));
      this.employeeService.getEmployeeDetailesById(employeeIdFromRoute).subscribe((content) => {
        this.items= content;
      });
  
    
    }

    extractId(){
      return this.items.id;
    }
  }

  

