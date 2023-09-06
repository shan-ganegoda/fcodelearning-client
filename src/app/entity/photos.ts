export class Photos{

  id!: number;
  imageurl!: string;
  name!: string;

  constructor(id:number,name:string,imageurl: string) {
    this.id = id;
    this.imageurl = imageurl;
    this.name = name;
  }

}
