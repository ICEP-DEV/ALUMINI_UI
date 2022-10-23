import { Injectable } from '@angular/core';
import { vac_samples } from 'src/data';
import { Vacancies } from '../shared/models/Vacancies';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor() {

  }

    getAllVacanccies():Vacancies[] {
      return vac_samples
    }

    getVacByFaculty(fac:string):Vacancies[]{
      return fac === 'All'?
      this.getAllVacanccies():
      this.getAllVacanccies().filter(facVac=>{
          return facVac.vac_faculty?.includes(fac);
        }
      )
    }

  // getAllFoodsByTag(tag: string):Food[]{
  //   return tag ==="All"?
  //   this.getAll():
  //   this.getAll().filter(food=>{
  //     return food.tags?.includes(tag)
  //   });
  // }
}
