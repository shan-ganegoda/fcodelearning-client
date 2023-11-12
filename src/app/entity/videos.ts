export class Videos{

  id!: number;
  name!: string;
  url!: string;

  constructor(id:number,name:string,url: string) {
    this.id = id;
    this.url = url;
    this.name = name;
  }

}
