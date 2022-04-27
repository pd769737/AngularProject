import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import { TEmployeeData } from '../employee.type';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  @Input() searchword:string;

  constructor(private employeeService:EmployeeDataService) { }

  ngOnInit(): void {
  }
  handleNewEmployeeAdd(employee:TEmployeeData){
    this.employeeService.addEmployee(employee);
  }
  searchThis() {
    this.searchcriteria.emit(this.searchword);
}
}
