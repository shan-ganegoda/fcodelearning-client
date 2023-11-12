import { Component } from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute} from "@angular/router";
import {Lessonservice} from "../../../service/lessonservice";
import {Courceservice} from "../../../service/courceservice";
import {Cources} from "../../../entity/cources";
import {Lesson} from "../../../entity/lesson";
import {Videos} from "../../../entity/videos";


@Component({
  selector: 'app-courcecontent',
  templateUrl: './courcecontent.component.html',
  styleUrls: ['./courcecontent.component.css']
})
export class CourcecontentComponent {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  value = 70;

  cources:any;
  lessons:Array<Lesson>= [];
  videos:Array<Videos>= [];

  constructor(private ar: ActivatedRoute,
              private cs: Courceservice
             ) {
    this.ar.paramMap.subscribe(async a => {
      this.cources = await this.cs.getCource(a.get("id"));
      // this.cource_id = a.get("id");

      this.lessons = this.cources.lessonList;
      this.videos = this.cources.lessonList.videosList;

      console.log(this.videos);

    });

  }
}
