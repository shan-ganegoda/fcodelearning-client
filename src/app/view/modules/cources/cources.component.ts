import {Component, OnInit} from '@angular/core';
import {Courceservice} from "../../../service/courceservice";
import {Cources} from "../../../entity/cources";
import {Gender} from "../../../entity/gender";

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit{

   courceslist = ['Angular','Spring','Java','PHP','Node','React','Net','Vue','Swing'];

   imageurl = '../assets/js.png'

   cources: Array<Cources> = [];

  constructor(private cs:Courceservice) {

  }

  ngOnInit() {

    this.initialize();
  }

  initialize(){

    this.cs.getAll().then((crs: Cources[]) => {
      this.cources = crs;
      console.log(this.cources);
    });
  }

}
