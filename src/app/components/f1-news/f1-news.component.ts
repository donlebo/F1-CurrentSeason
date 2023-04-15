import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/providers/results.service';

@Component({
  selector: 'app-f1-news',
  templateUrl: './f1-news.component.html',
  styleUrls: ['./f1-news.component.css']
})
export class F1NewsComponent implements OnInit{

articlesWithImage: any[] = [];
textToSearch: string | undefined;
page: number = 1;

constructor(private results: ResultsService) { }

async ngOnInit() {
  try {
    const news = (await this.results.getNews(this.page))?.articles;
    this.articlesWithImage = news!.filter(article => article.urlToImage !== null);
    console.log(this.articlesWithImage);
  } catch (error) {
    console.log(error)
    }
  }
}
