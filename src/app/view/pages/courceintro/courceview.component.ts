import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Courceservice} from "../../../service/courceservice";
import {MatDialog} from "@angular/material/dialog";
import {MessageComponent} from "../../../util/dialog/message/message.component";
import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";
import {Cources} from "../../../entity/cources";

@Component({
  selector: 'app-courceview',
  templateUrl: './courceview.component.html',
  styleUrls: ['./courceview.component.css']
})
export class CourceviewComponent {

  toggleBtn = false;
  isEnrolled = true;

  cources:Array<Cources> = [];





  constructor(private ar:ActivatedRoute,
              private cs:Courceservice,
              private md:MatDialog
  ) {

    this.ar.paramMap.subscribe(async a => {
        // console.log(a.get("id"))
        this.cources = await this.cs.getCource(a.get("id"));
      }

    );

  }

message(){

    this.md.open(MessageComponent,{
      width:'30%',
      height: '10rem'
    });

  console.log(this.cources);

    if(this.isEnrolled){
      console.log("Course")
      this.toggleBtn = true;
    }
}




}
