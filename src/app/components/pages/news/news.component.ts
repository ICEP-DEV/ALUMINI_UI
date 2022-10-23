import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  headerTitle:string = "#News";
  headerDescription:string="";
  backgroundImg:string="";

  news:News[]=[];
  constructor(
    newService:NewsService,
    activatedRoute:ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params)=>{
        this.news = newService.getAllNews();
    })
  }

  ngOnInit(): void {
    this.news;
  }

}
