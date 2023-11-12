import {Gender} from "../entity/gender";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../entity/lesson";


@Injectable({
  providedIn: 'root'
})
export class Lessonservice{

  constructor(private http:HttpClient) {  }

  async getAll():Promise<Array<Lesson>>{

    const lessons = await this.http.get<Array<Lesson>>('http://localhost:8080/lessons').toPromise();
    if(lessons == undefined){
      return [];
    }
    return lessons;
    // console.log(cources);
  }

  async getLesson(id:any):Promise<Lesson[]>{

    const lessons = await this.http.get<Array<Lesson>>('http://localhost:8080/lessons/'+ id).toPromise();
    if(lessons == undefined){
      return [];
    }
    return lessons;
    // console.log(cources);
  }

}
