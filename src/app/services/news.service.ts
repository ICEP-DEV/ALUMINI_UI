import { Injectable } from '@angular/core';
import { news_sample } from 'src/data';
import { News } from '../shared/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getAllNews():News[]{
    return news_sample;
  }
}
