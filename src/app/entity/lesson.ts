import {Videos} from "./videos";

export class Lesson{

  id!: number;
  name!: string;
  videosList!: Videos;

  constructor(id:number,name:string,videosList:Videos) {
    this.id = id;
    this.name = name;
    this.videosList = videosList;
  }

}
