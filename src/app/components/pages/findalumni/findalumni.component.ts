import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumniService } from 'src/app/services/alumni.service';
import { Alumni } from 'src/app/shared/models/Alumni';

@Component({
  selector: 'app-findalumni',
  templateUrl: './findalumni.component.html',
  styleUrls: ['./findalumni.component.scss']
})
export class FindalumniComponent implements OnInit {
  headerTitle = "#LET'S CONNECT";

  alumnus:Alumni[] = [];
  constructor(private alumniService:AlumniService,activatedRoute:ActivatedRoute) {
   activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.alumnus = this.alumniService.getAlumniBySearchTerm(params.searchTerm);
    else
    this.alumnus= alumniService.getAllAlumni();
  })

   }

  ngOnInit(): void {
  }

}
