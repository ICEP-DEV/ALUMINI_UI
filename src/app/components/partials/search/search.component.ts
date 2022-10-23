import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumniService } from 'src/app/services/alumni.service';
import { Alumni } from 'src/app/shared/models/Alumni';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchTerm='';
alumni:Alumni[]=[]
  constructor(
    alumniService:AlumniService,
    activatedRoute:ActivatedRoute,
    private router:Router ) {

  activatedRoute.params.subscribe((params)=>{
  if(params.searchTerm)
  this.searchTerm = params.searchTerm;

  this.alumni= alumniService.getAllAlumni();
  })
   }

  ngOnInit(): void {
  }
  search(term:string){
    if(term){
      this.router.navigateByUrl('/search/'+term);
    }
    // this.searchTerm='All';

  }

}
