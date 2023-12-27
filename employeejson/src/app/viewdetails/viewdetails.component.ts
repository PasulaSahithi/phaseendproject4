import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent {

  constructor(private empservice:EmployeeserviceService,private route:ActivatedRoute,private router:Router ) {
  }
  
  employee:any={};
  employees: any[]=[];
  ishidden=false;
  ngOnInit(): void 
  {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
     
        this.getEmployeeDetails(id);
    });
    }
  
getEmployeeDetails(id: any):void
{
  this.empservice.getEmployeeById(id).subscribe(employee=>{
    this.employee=employee;
  })
}

  deleteEmployee(id:any)
  {
    this.empservice.deleteemployee(id).subscribe(()=>{
      this.employee=this.employees.filter(employee=>employee.id!==id);
      console.log(id);
      this.ishidden=true;
      this.router.navigate(['/addemployee'])
    })
  }


  // getEmployeeDetails(id: string): void {
  //   this.empservice.getEmployeeById(id).subscribe(employee => {
  //     this.employee = employee;
  //   });
  // }
  
}