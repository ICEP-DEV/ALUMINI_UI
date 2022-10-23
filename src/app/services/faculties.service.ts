import { Injectable } from '@angular/core';
import { facalty_samples } from 'src/data';
import { Faculty } from '../shared/models/faculties';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {

  constructor() { }

  getAllFaculties():Faculty[]{
    return facalty_samples;
  }
}
