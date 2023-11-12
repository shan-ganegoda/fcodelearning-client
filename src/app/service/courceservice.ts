import {Gender} from "../entity/gender";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Cources} from "../entity/cources";


@Injectable({
  providedIn: 'root'
})
export class Courceservice{

  constructor(private http:HttpClient) {  }

  async getAll():Promise<Array<Cources>>{

    const cources = await this.http.get<Array<Cources>>('http://localhost:8080/cources').toPromise();
    if(cources == undefined){
      return [];
    }
    return cources;
    // console.log(cources);
  }

  async getCource(id:any):Promise<Cources[]>{

    const cources = await this.http.get<Array<Cources>>('http://localhost:8080/cources/'+ id).toPromise();
    if(cources == undefined){
      return [];
    }
    return cources;
    // console.log(cources);
  }

}
