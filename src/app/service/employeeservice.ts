import {Employee} from "../entity/employee";
import {Gender} from "../entity/gender";
import {Designation} from "../entity/designation";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Employeeservice{

  constructor(private http:HttpClient) {  }

  async getAll(query:string):Promise<Array<Employee>>{

    const employees = await this.http.get<Array<Employee>>('http://localhost:8080/employees'+query).toPromise();
    if(employees == undefined){
      return [];
    }
    return employees;
  }

}
