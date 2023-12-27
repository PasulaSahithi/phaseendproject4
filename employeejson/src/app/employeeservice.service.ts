import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private url='http://localhost:3000/employee';
  constructor(private http:HttpClient) { }


addemployee(employee:any){
  return this.http.post(this.url,employee);
}

getemployee():Observable<any>{
  return this.http.get(this.url);
}
// getemployeebyid(id:any):Observable<any>{
//   return this.http.get(this.url+"/"+id,{responseType:'text' as 'json'});
// }
deleteemployee(id:any)
{
  return this.http.delete(this.url+"/"+id);
}
updateemployee(id:any,employee:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,employee);
}
getEmployeeById(id: any): Observable<any> {
  return this.http.get(`${this.url}/${id}`); // Use template literals to include the ID in the URL
}
}