import { Component, OnInit } from '@angular/core';
declare var filtering:any;
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
headerTitle:string = "#GALLERY";
  headerDescription:string="Read, watch, listen. #TUT_ALUMNI ahare their experiences, perspectives, and commnunity engagements.";
  backgroundImg:string="";

  constructor() { }

  ngOnInit(): void {
    new filtering();
  }

}
