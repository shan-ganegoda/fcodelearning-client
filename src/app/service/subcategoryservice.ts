import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Level} from "../entity/level";
import {SubCategory} from "../entity/subcategory";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryservice{

  constructor(private http:HttpClient) {  }

  async getAllList():Promise<Array<SubCategory>>{

    const subcategories = await this.http.get<Array<SubCategory>>('http://localhost:8080/subcategories').toPromise();
    if(subcategories == undefined){
      return [];
    }
    return subcategories;
  }

}
