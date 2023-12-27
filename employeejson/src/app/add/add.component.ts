import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  constructor(private empservice:EmployeeserviceService) {
  }
  employee:any[]=[];
  id=""
  firstname=""
  lastname=""
  email=""
  message=""
 ngOnInit(): void {
     this.getProducts();
 }
  addemployee(firstname:String,lastname:String,email:String){
  
    firstname=firstname.trim();
    lastname=lastname.trim();
    email=email.trim();
    const employee={firstname,lastname,email}
    this.empservice.addemployee(employee).subscribe(newEmployee=>{this.employee.push(newEmployee)})
    this.message=firstname+" added successfully";

  }
  getProducts():void{
    this.empservice.getemployee().subscribe(data=>{this.employee=data});
  }
}
