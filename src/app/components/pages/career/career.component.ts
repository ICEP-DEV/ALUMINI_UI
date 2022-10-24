import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultiesService } from 'src/app/services/faculties.service';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { Vacancies } from 'src/app/shared/models/Vacancies';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})

export class CareerComponent implements OnInit {

  headerTitle:string = "#Vacancies";
  headerDescription:string="";
  backgroundImg:string="";

  Vacancies:Vacancies[]=[];
  constructor(
    private vacanyService:VacanciesService,
    activatedRoute:ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.Vacancies = this.vacanyService.getVacByFaculty(params.searchTerm)
      else
      this.Vacancies = vacanyService.getAllVacanccies();
    })
   }

  ngOnInit(): void {
  }

}
