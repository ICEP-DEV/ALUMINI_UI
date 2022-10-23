import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultiesService } from 'src/app/services/faculties.service';
import { Faculty } from 'src/app/shared/models/faculties';

@Component({
  selector: 'app-search-vacancies',
  templateUrl: './search-vacancies.component.html',
  styleUrls: ['./search-vacancies.component.scss']
})
export class SearchVacanciesComponent implements OnInit {

  searchTerm='';
  faculty:Faculty[]=[];

  constructor(
  facultyService:FacultiesService,
  activatedRoute:ActivatedRoute,
  private router:Router
  ) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
    })

    this.faculty = facultyService.getAllFaculties();
   }

  ngOnInit(): void {
  }

  searchFaulty(term:string){
    if(term){
      this.router.navigateByUrl('career/searchFaculty/'+term)
    }
  }

}
