import {Gender} from "../entity/gender";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employeestatus} from "../entity/employeestatus";

@Injectable({
  providedIn: 'root'
})
export class EmployeeStatusService{

  constructor(private http:HttpClient) {  }

  async getAllList():Promise<Array<Employeestatus>>{

    const estatuses = await this.http.get<Array<Employeestatus>>('http://localhost:8080/employeestatuses/list').toPromise();
    if(estatuses == undefined){
      return [];
    }
    return estatuses;
  }

}
