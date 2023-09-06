import {Designation} from "../entity/designation";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Level} from "../entity/level";
import {Photos} from "../entity/photos";

@Injectable({
  providedIn: 'root'
})
export class Photoservice{

  constructor(private http:HttpClient) {  }

  async getAll():Promise<Array<Photos>>{

    const photos = await this.http.get<Array<Photos>>('http://localhost:8080/photos').toPromise();
    if(photos == undefined){
      return [];
    }
    return photos;
  }

}
