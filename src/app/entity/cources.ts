import {Level} from "./level";
import {MainCategory} from "./maincategory";
import {SubCategory} from "./subcategory";
import {Photos} from "./photos";

export class Cources{

  id!: number;
  name!: string;
  authorId!: number;
  fee!: string;
  level!: Level;
  mainCategory!: MainCategory;
  subCategory!: SubCategory;
  photo!: Photos;

  constructor(id:number,name:string,authorId:number,fee:string,level: Level,mainCategory: MainCategory,subCategory: SubCategory,photo: Photos) {
    this.id = id;
    this.name = name;
    this.authorId = authorId;
    this.fee = fee;
    this.level = level;
    this.mainCategory = mainCategory;
    this.subCategory = subCategory;
    this.photo = photo;
  }

}
