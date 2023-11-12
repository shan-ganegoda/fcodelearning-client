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

  cource_id:any;

  image:string = "";
  courcename:string= "";
  description:string = "";
  duration: string = "";
  level: string = "";
  issertified: boolean = true;
  videocount: number = 0;

  certificatestatus:string = "";

  wishlisted:boolean = false;
  wishstatus:string = "wishlistd";

  cources:any;

  constructor(private ar:ActivatedRoute,
              private cs:Courceservice,
              private md:MatDialog
  ) {

    this.ar.paramMap.subscribe(async a => {
        this.cources = await this.cs.getCource(a.get("id"));
        this.cource_id = a.get("id");
      // console.log( this.cources.photo.id);

      this.image = this.cources.photo.imageurl;
      this.courcename = this.cources.name;
      this.description = this.cources.description;
      this.duration = this.cources.duration;
      this.level = this.cources.level.name;
      this.videocount = this.cources.videocount;
      this.issertified = this.cources.issertified;

      this.issertified ? this.certificatestatus = "Certificate Cource" : this.certificatestatus = " Not Certificate Cource";



      // cource.photo.id

      });

     if(this.wishlisted){
       this.wishstatus = "wishlista";
     }else{
       this.wishstatus = "wishlistd";
     }

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


setWishList(){
  this.wishlisted = !this.wishlisted;
  console.log("Hello")

  if(this.wishlisted){
    this.wishstatus = "wishlista";
  }else{
    this.wishstatus = "wishlistd";
  }

}




}
