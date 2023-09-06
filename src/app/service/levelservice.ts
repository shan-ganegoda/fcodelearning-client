import {Designation} from "../entity/designation";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Level} from "../entity/level";

@Injectable({
  providedIn: 'root'
})
export class Levelservice{

  constructor(private http:HttpClient) {  }

  async getAllList():Promise<Array<Level>>{

    const levels = await this.http.get<Array<Level>>('http://localhost:8080/levels').toPromise();
    if(levels == undefined){
      return [];
    }
    return levels;
  }

}
