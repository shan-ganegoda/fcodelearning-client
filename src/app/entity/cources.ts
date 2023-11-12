import {Level} from "./level";
import {MainCategory} from "./maincategory";
import {SubCategory} from "./subcategory";
import {Photos} from "./photos";
import {Lesson} from "./lesson";

export class Cources{

  id!: number;
  name!: string;
  authorId!: number;
  fee!: string;
  level!: Level;
  mainCategory!: MainCategory;
  subCategory!: SubCategory;
  photo!: Photos;
  lessonList!:Lesson;

  constructor(id:number,name:string,authorId:number,fee:string,level: Level,mainCategory: MainCategory,subCategory: SubCategory,photo: Photos,lessonList:Lesson) {
    this.id = id;
    this.name = name;
    this.authorId = authorId;
    this.fee = fee;
    this.level = level;
    this.mainCategory = mainCategory;
    this.subCategory = subCategory;
    this.photo = photo;
    this.lessonList = lessonList;
  }

}
