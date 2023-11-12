import {Gender} from "../entity/gender";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Videos} from "../entity/videos";


@Injectable({
  providedIn: 'root'
})
export class Courceservice{

  constructor(private http:HttpClient) {  }

  async getAll():Promise<Array<Videos>>{

    const videos = await this.http.get<Array<Videos>>('http://localhost:8080/videos').toPromise();
    if(videos == undefined){
      return [];
    }
    return videos;
    // console.log(cources);
  }

  async getVideos(id:any):Promise<Videos[]>{

    const videos = await this.http.get<Array<Videos>>('http://localhost:8080/videos/'+ id).toPromise();
    if(videos == undefined){
      return [];
    }
    return videos;
    // console.log(cources);
  }

}
