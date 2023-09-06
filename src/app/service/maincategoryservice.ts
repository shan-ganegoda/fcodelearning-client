import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Level} from "../entity/level";
import {SubCategory} from "../entity/subcategory";
import {MainCategory} from "../entity/maincategory";

@Injectable({
  providedIn: 'root'
})
export class MainCategoryservice{

  constructor(private http:HttpClient) {  }

  async getAllList():Promise<Array<MainCategory>>{

    const maincategories = await this.http.get<Array<MainCategory>>('http://localhost:8080/maincategories').toPromise();
    if(maincategories == undefined){
      return [];
    }
    return maincategories;
  }

}
