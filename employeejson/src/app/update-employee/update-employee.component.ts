import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  constructor(private empservice:EmployeeserviceService,private route:ActivatedRoute,private router:Router){}
  employee: any[]=[];
  empid=""
  firstname=""
  lastname=""
  email=""
  updatedemp:any=null;
  message="";

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.empid+=id;
    });
    }
  updateEmployee(firstname:string,lastname:string,email:string)
  {
    firstname=firstname.trim();
    lastname=lastname.trim(); 
    email=email.trim(); 
    const employee={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email
     }
    this.empservice.updateemployee(this.empid,employee).subscribe((newemployee=>{
      this.employee.push(employee)
      this.router.navigate(['/addemployee'])
    }));
   }
   
}
