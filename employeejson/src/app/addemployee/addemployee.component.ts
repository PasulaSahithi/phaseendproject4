import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent implements OnInit{
constructor(private employeeservice:EmployeeserviceService){}
employees: any[]=[];
ngOnInit(): void {
    this.getProducts();
}
  getProducts():void{
    this.employeeservice.getemployee().subscribe(data=>{this.employees=data});
  }
}
